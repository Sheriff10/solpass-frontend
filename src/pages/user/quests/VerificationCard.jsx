import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  grayBtnSmClass,
  greenBtnSmClass,
  whiteBtnSmClass,
} from "../../../ui/buttonStyle";
import { FaCopy } from "react-icons/fa6";
import { BsCircle, BsLink } from "react-icons/bs";
import QRCode from "react-qr-code";
import { GiCancel } from "react-icons/gi";
import {
  statusUpdate,
  verifyVerification,
} from "../../../services/api-service";
import axios from "axios";
import StatusHolder from "../../../ui/user/StatusHolder";
import Loader from "../../../ui/Loader";
import copyToClipboard from "../../../utils/copy";

export default function VerificationCard({
  verificationLink,
  statusLink,
  description,
  setShow,
}) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [statusNumber, setStatusNumber] = useState(0);

  // fetch status
  const handleVerificationStatus = async () => {
    console.log(statusLink);
    // if (statusNumber === 4) return;
    try {
      // await statusUpdate(statusLink);
      const response = await axios.get(statusLink);
      console.log(response.data.session);

      const status = response.data.session.statusV2;
      // alert(status);

      switch (status) {
        case "SESSION_STARTED":
          setStatusNumber(1);
          break;
        case "USER_INIT_VERIFICATION":
          setStatusNumber(2);
          break;
        case "PROOF_GENERATION_STARTED":
          setStatusNumber(3);
          break;
        case "PROOF_GENERATION_SUCCESS":
          setStatusNumber(4);
          setLoading(true);
          await verifyVerification(statusLink);
          setShow(false);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // `
  // SESSION_STARTED
  // USER_INIT_VERIFICATION
  // PROOF_GENERATION_STARTED
  // PROOF_SUBMITTED
  // `;

  useEffect(() => {
    const interval = setInterval(() => {
      // alert("calling");
      handleVerificationStatus();
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [statusLink]); // Add statusLink as a dependency if it can change

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        className="relative z-[100]"
        // initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary-light bg-opacity-75 transition-opacity backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all lg:w-[60%]">
                {loading && <Loader />}
                <div className="bg-secondary-light p-8 py-10 flex flex-col">
                  <div className="grid lg:grid-cols-2 gap-5 items-center px-3">
                    <div className="qr-wrapper flex">
                      <div className="wrap bg-white p-3 rounded-xl">
                        <QRCode value={verificationLink} />
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="h1 font-bold text-primary-green text-lg mb-3">
                        Scan QR code or Open link
                      </div>
                      <span className="text-sm text-white text-opacity-60">
                        {description}
                      </span>

                      <div className="bg-white bg-opacity-10 rounded-lg mt-4 p-2 ">
                        <p className="overflow-hidden text-ellipsis text-nowrap">
                          {verificationLink}
                        </p>
                      </div>

                      <div className="btn-wrap flex gap-2 items-center mt-4">
                        <button
                          className={
                            grayBtnSmClass +
                            " flex gap-3 items-center justify-center"
                          }
                          onClick={() => copyToClipboard(verificationLink)}
                        >
                          <FaCopy /> Copy link
                        </button>
                        <a
                          href={verificationLink}
                          target="_blank"
                          className={
                            greenBtnSmClass +
                            " flex gap-3 items-center justify-center"
                          }
                        >
                          <BsLink /> Open Link
                        </a>
                      </div>

                      <StatusHolder statusNumber={statusNumber} />
                    </div>
                  </div>
                  <div className="btn-wrap mt-5 flex justify-end">
                    <button
                      className={whiteBtnSmClass}
                      onClick={() => setShow(false)}
                    >
                      <span className="text-red-600 flex items-center gap-3">
                        Close <GiCancel />
                      </span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
