import React, { useState } from 'react'
import { SuiLogo } from '../assets/icons';
import Button from '../components/Button';
import "@fontsource/cormorant-infant";
import "@fontsource/courier-prime";
import "@fontsource/inter";
import Images from '../assets/images';
import ColorButtons from "../assets/images/Group 26.png";

const bites = ["8x", "16x", "32x", "64x"];

function CreateArt() {
  const [selectedBite, setSelectedBite] = useState("8x");
  return (
    <div className="flex flex-col items-center bg-[#FCFBF2]">
      <div className="py-6">
        <div className="flex items-center justify-center gap-[2px]">
          <SuiLogo />
          <p className="font-inter font-bold text-xl text-black">Sushi.fm/rnft</p>
        </div>
      </div>
      <div className="py-6">
        <div className="max-w-[513px]">
          <div className="flex flex-col items-center">
            <h1 className="font-cormorant text-[44px] mb-[7px]">Create art on chain</h1>
            <p className="mb-[21px] font-inter text-center">Generate & mint beautiful dynamic soul bound NFT art based on your SUI wallet hexadecimal address. </p>
            <Button title={"Connect Wallet"} />
          </div>
        </div>
      </div>
      <div className="md:max-w-[459px] max-w-full md:mx-0 mx-4 md:pb-20 pb-6">
        <div className="md:p-8 p-4 bg-white border-[#DBDBDB] rounded-[10px] border-[0.5px]">
          <div className="p-4 flex flex-col gap-3">
            <p className="font-inter font-[800]">Instructions</p>
            <p className="font-inter text-sm">Connect your sui wallet and verify the address is correct. Then tap on the size you prefer to generate. Before tapping Mint, choose between abstract or grid and review pricing. </p>
          </div>
          <div className="rounded-[5px] bg-[#F5F5F5]">
            <p className="p-2 font-courier text-[13px] text-[#656161] break-all">0xf920f72d1556aaf95c00ecff60904e815395949bb3b99eb22fa98a89fe79c954</p>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="grid md:grid-cols-4 grid-cols-2 justify-between flex-wrap md:flex-nowrap md:gap-y-0 gap-y-3 gap-x-3">
              {bites.map((bite, ind) => (
                <button key={ind} className={`py-2 px-6 border-none rounded-[5px] outline-none ${selectedBite == bite ? "bg-[#E2E2E2]" : "bg-black"} transition-all`} onClick={() => setSelectedBite(bite)}>
                  <p className={`font-inter font-medium ${selectedBite == bite ? "text-black" : "text-white"} transition-all`}>{bite}</p>
                </button>
              ))}
            </div>
            <div>
              <img src={Images.colourized} alt="Colourized Image" />
            </div>
            <div className="flex justify-between items-center">
              <button className="py-[10px] px-4 border-none rounded-[5px] outline-none bg-black flex md:gap-24 gap-12">
                <p className="font-inter font-medium text-white">Mint</p>
                <p className="font-inter font-medium text-white flex items-center gap-1"> 1.476 <SuiLogo width={"19"} height={"19"} /></p>
              </button>
              <img src={ColorButtons} alt="..." width="99" height="44" />
            </div>
            <p className="font-inter font-medium text-[12px] text-center">*Gas and final price are variable subject to be different for each mint.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateArt;
