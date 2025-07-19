import InputBox from "./InputBox";
import { useState } from "react";

const LegalAssistance = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  console.log(input);
  const [messages, setMessages] = useState([]);
  const onInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = async () => {
    setIsLoading(true);
    //simulated Api Response
    const simulatedResponse = {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7)",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
      ],
    };
    setMessages([
      {
        question: input,
        answer: simulatedResponse.answer,
        citations: simulatedResponse.citations,
      },
    ]);
    setIsLoading(false);
  };
  return (
    <div>
      <div className="bg-gray-300 w-9/12 h-[75vh] mt-10 rounded-3xl p-10 mx-auto">
        <div className="w-full flex justify-center">
          <div className="text-xl font-bold  border-b-2 w-fit border-black">
            Legal Assistant Interface with Citations{" "}
          </div>
        </div>
        {messages && messages.length > 0 && (
          <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-5 ">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl shadow-md w-fit max-w-md ml-auto"
              >
                <p className="text-sm text-gray-500 font-semibold">
                  Your Question :
                </p>
                <p className="mb-2 text-blue-700">{msg.question}</p>

                <p className="text-sm text-gray-500 font-semibold">
                  Legal Assistance :
                </p>
                <p className="text-gray-800 font-medium">{msg.answer}</p>

                {msg.citations && msg.citations.length > 0 && (
                  <>
                    <div className="text-sm text-gray-500 font-semibold mt-2">
                      Citation:
                    </div>
                    {msg.citations.map((citation, i) => (
                      <div key={i}>
                        <a
                          href={citation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          "{citation.text}" -
                          <span className="text-red-400 font-medium underline">
                            {citation.source}
                          </span>
                        </a>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <InputBox
        isLoading={isLoading}
        onChange={onSubmit}
        onInput={onInput}
        input={input}
      />
    </div>
  );
};

export default LegalAssistance;
