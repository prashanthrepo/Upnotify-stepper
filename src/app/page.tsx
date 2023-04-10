//import Image from 'next/image'
'use client';
import { Inter_Tight } from 'next/font/google';
import { useState } from 'react';
import stepData from './DummyData/StepData';
import Image from 'next/image';
import STEP_2_IMAGE from './images/step2.png';
import STEP_3_IMAGE from './images/step3.png';
import STEP_4_IMAGE from './images/step4.png';

const inter_tight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const onNextClick = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  const onSkipClick = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };
  const getCurrentStepData = (step: number) => {
    return stepData?.find((item) => item.step === step);
  };
  return (
    <div className={`${inter_tight.variable} font-sans`}>
      <div className="h-screen bg-upnotifyborder flex flex-row justify-center items-center ">
        <div className="h-auto w-1/3 bg-[#fff] rounded-lg shadow">
          <div>
            <div className="grow">
              <div className=" min-h-[450px]">
                {currentStep === 1 && (
                  <div>
                    <div className="p-6 space-y-6">
                      <section>
                        <label
                          className="text-upnotifylabel"
                          htmlFor="feedback">
                          Expertise and Experience
                        </label>
                        <textarea
                          id="feedback"
                          className="w-full border border-upnotifyborder rounded-lg p-3 mt-2 text-upnotifyplaceholder text-[16px] font-light"
                          rows={4}
                          placeholder="I really enjoy…"
                          defaultValue=" I have 5 years experience working at a fortune 500 company
                    where we helped 1000th companies scale to X.
                    I have strong copywriting skills via ...."></textarea>
                      </section>
                    </div>
                    <div className="p-6 space-y-6">
                      <section>
                        <label
                          className="text-upnotifylabel"
                          htmlFor="feedback">
                          How would you like to sign off the proposal
                        </label>
                        <textarea
                          id="feedback"
                          className="w-full border border-upnotifyborder rounded-lg p-3 mt-2 text-upnotifyplaceholder text-[16px] font-light "
                          rows={4}
                          placeholder="I really enjoy…"
                          defaultValue=" I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation Best Andrew"></textarea>
                      </section>
                    </div>
                  </div>
                )}
                {currentStep === 2 && (
                  <div>
                    <div className="flex p-6 justify-center items-center">
                      <section>
                        <Image
                          className="mr-0"
                          src={STEP_2_IMAGE}
                          alt="Step 2"
                        />
                      </section>
                    </div>
                  </div>
                )}
                {currentStep === 3 && (
                  <div>
                    <div className="flex p-6 justify-center items-center">
                      <section>
                        <Image
                          className="mr-0"
                          src={STEP_3_IMAGE}
                          alt="Step 3"
                        />
                      </section>
                    </div>
                  </div>
                )}
                {currentStep === 4 && (
                  <div>
                    <div className="flex p-6 justify-center items-center">
                      <section>
                        <Image
                          className="mr-0"
                          src={STEP_4_IMAGE}
                          alt="Step 4"
                        />
                      </section>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-40">
                <div className="p-6 space-y-6">
                  <section>
                    <div className="flex justify-between">
                      <div className="mr-10">
                        <h3 className="text-upnotifylabel text-[20px] font-semibold mb-3">
                          {getCurrentStepData(currentStep)?.title}
                        </h3>
                        <p className="text-[#6D727D] text-[14px] font-light">
                          {getCurrentStepData(currentStep)?.description}
                        </p>
                      </div>
                      <span className="bg-[#EEF3FF] h-8 p-1.5 rounded-md text-[14px] text-[#0053E1] ">
                        {currentStep}/4
                      </span>
                    </div>
                  </section>
                </div>
              </div>
              <footer>
                <div className="flex flex-row justify-between px-6 py-5 space-x-4 ">
                  <button
                    className="upnotify-secondary"
                    onClick={() => onSkipClick()}>
                    Skip
                  </button>
                  <button
                    className="upnotify-primary"
                    onClick={() => onNextClick()}>
                    {currentStep === 4 ? 'Enter app' : 'Next'}
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
