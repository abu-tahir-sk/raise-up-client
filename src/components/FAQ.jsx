const FAQ = () => {
  return (
    <div className="w-10/12 mx-auto py-8">
      <div className="collapse collapse-arrow  border border-base-300 my-4 bg-gray-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title   font-bold text-xl">
         What is RiseUp?
        </div>
        <div className="collapse-content text-[18px]">
         RiseUp is the financial wellbeing app that helps you get on top of your finances, feel good about your spending, and save for whatever makes you happy. 
         <p className="py-4">
      With one monthly subscription, you’ll have all the tools, support and confidence you need to change your money mindset and grow your savings. 
         </p>
         <ol className="list-disc list-inside ml-6 marker:text-[#1abde1]">
            <li>Get a monthly forecast of how the month will end, before it begins</li>
            <li>Aggregate all your accounts, spending and expenses in one place</li>
            <li>Get insights and recommendations to help you save</li>
            <li>Set goals and get regular updates on your progress </li>
            <li>Share tips and tricks with a thriving community</li>
         </ol>
        </div>
      </div>
      <div className="collapse collapse-arrow  border border-base-300 my-4 bg-gray-200 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title bg-gray-200  font-bold text-xl">
          Can my partner and I join together?
        </div>
        <div className="collapse-content text-[18px]">
          Yes, you can add your partner to your account and achieve financial stability and wellbeing together. You’ll share the same account and enjoy the same great tools and benefits, at no extra cost. Just head over to your Settings in the app:
        </div>
      </div>
      <div className="collapse collapse-arrow  border border-base-300 my-4 bg-gray-200 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title bg-gray-200  font-bold text-xl">
         Why should I pay for an app that’s supposed to save me money?
        </div>
        <div className="collapse-content text-[18px]">
        <p className="py-3">Your monthly subscription fuels our mission to support your financial journey and continually improve our product.</p>
        <p className="pb-3">It also allows us to be independent. We have no hidden interests or agendas. No hidden clauses. And you’ll never see an ad trying to sell you something. Our success is purely dependent on the growth and satisfaction of our members. We grow together.</p>
        <p>And it’s money well spent. On average, our customers see an improvement in their cash flow of £532 a month after just three months of using our app (check our impact report).</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  border border-base-300 my-4 bg-gray-200 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title bg-gray-200  font-bold text-xl">
       How much does it cost to join?
        </div>
        <div className="collapse-content text-[18px]">
        <p className="py-3">Your monthly subscription fuels our mission to support your financial journey and continually improve our product.</p>
        <p className="pb-3">It also allows us to be independent. We have no hidden interests or agendas. No hidden clauses. And you’ll never see an ad trying to sell you something. Our success is purely dependent on the growth and satisfaction of our members. We grow together.</p>
        <p>And it’s money well spent. On average, our customers see an improvement in their cash flow of £532 a month after just three months of using our app (check our impact report).</p>
        </div>
      </div>
      <div className="collapse collapse-arrow  border border-base-300 my-4 bg-gray-200 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title bg-gray-200  font-bold text-xl">
       How do I cancel my subscription?
        </div>
        <div className="collapse-content text-[18px]">
        <p className="py-3">You can cancel your subscription at any time, here’s how:</p>
        
      <ul className="pl-4">
            <li className="py-2"> 👉Head to Settings in the top right of the app</li>
            <li className="py-2">👉 Click “Subscription details” then “Manage Subscription”</li>
            <li className="py-2">👉 You can then select “Cancel plan”</li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
