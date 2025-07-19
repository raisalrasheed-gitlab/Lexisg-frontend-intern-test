import InputBox from "./InputBox";
import { useState } from "react";

const LegalAssistance = () => {
  const [messages, setMessages] = useState([
    {
      question: "what is you name",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat quis, accusantium culpa consectetur atque veniam sunt aliasharum corrupti!",
    },
  ]);
  return (
    <div>
      <div className="bg-gray-300 w-full h-[90vh] mt-10 rounded-3xl p-10">
        <div className="w-full flex justify-center">
          <div className="text-xl font-bold  border-b-2 w-fit border-black">
            Legal Assistant Interface with Citations{" "}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-5">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow-md w-fit max-w-md ml-auto"
            >
              <p className="text-sm text-gray-500 font-semibold">You:</p>
              <p className="mb-2 text-blue-700">{msg.question}</p>

              <p className="text-sm text-gray-500 font-semibold">
                Legal Assistance :
              </p>
              <p className="text-gray-800">{msg.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <InputBox />
    </div>
  );
};

export default LegalAssistance;
