import React, { useEffect } from "react";
import { greenBtnSmClass } from "../../ui/buttonStyle";
import {
  useWalletModal,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { loginAdress } from "../../services/api-service";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/cookies";
export default function Intro() {
  const { setVisible } = useWalletModal();
  const { publicKey, connected } = useWallet();

  const navigate = useNavigate();

  useEffect(() => {
    const hasRedirected = localStorage.getItem("hasRedirected");
    if (hasRedirected) return;
    if (connected && publicKey) {
      authorize();
    }
  }, [connected, publicKey]);

  const authorize = async () => {
    try {
      const response = await loginAdress(publicKey.toString());
      setCookie("access-token", response.accessToken);
      setCookie("address", publicKey.toString());
      localStorage.setItem("hasRedirected", true);
      navigate("/user/categories-quest");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="wrap py-56  px-8 relative overflow-clip">
      <img
        src="/asset/Line.png"
        className="absolute w-full z-[-1] top-0 left-0 right-0 lg:hidden"
        alt="line"
      />
      <div className="flex text-center flex-col gap-10 justify-center items-center lg:w-[60%] mx-auto">
        <h1 className=" text-3xl lg:text-5xl font-bold">
          Solpass: Verifying Humanity, Empowering Trust
        </h1>

        <p className="text-white text-sm lg:text-md text-opacity-65">
          Access a world of Web3 opportunities securely with a single sign-in.
          Effortlessly connect to decentralized applications and services,
          streamline your user experience.
        </p>

        <div className="wrap flex justify-center gap-3 items-center relative z-[10] p-4">
          {connected ? (
            <WalletMultiButton
              style={{
                backgroundColor: "#32CD32", // Customize the background color if needed
                padding: "8px 12px", // Match your padding
                borderRadius: "8px", // Ensure rounded corners
                color: "#fff", // Text color
                fontSize: "14px",
                fontFamily: "Poppins",
              }}
            />
          ) : (
            <button
              className={greenBtnSmClass}
              onClick={() => setVisible(true)}
            >
              Connect Wallet
            </button>
          )}

          <img src="/asset/user.png" alt="users" />
          <span className="text-xs text text-white text-opacity-65">
            Verify and start <br /> claiming with people
          </span>
        </div>
      </div>
      <img
        src="/asset/line-light.png"
        alt="lineLight"
        className="absolute bottom-0 right-0 w-[250px]"
      />
      <img
        src="/asset/intro-blur.png"
        alt="lineLight"
        className="absolute top-[250px]"
      />
      <img
        src="/asset/globe.png"
        alt="lineLight"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
