import { CheckCircle2 } from "lucide-react";

const primePlans = [
  {
    title: "Prime Monthly",
    price: "$14.99",
    label: "",
    tagColor: "",
    features: ["Free shipping", "Prime video", "Exclusive deals"],
  },
  {
    title: "Prime Annual",
    price: "$139",
    label: "SALE",
    tagColor: "bg-red-500",
    features: ["Free shipping", "Prime video", "Exclusive deals", "Annual savings"],
  },
  {
    title: "Prime Student Monthly",
    price: "$7.49",
    label: "50% OFF",
    tagColor: "bg-yellow-400",
    features: ["Free shipping", "Prime video", "Prime deals", "Prime points"],
  },
  {
    title: "Qualified Gov. Assistance",
    price: "$7.99",
    label: "47% OFF",
    tagColor: "bg-green-500",
    features: ["Free shipping", "Prime video", "Exclusive deals"],
  },
];

const PrimeMembership = () => {
  return (
    <div className="mt-20 px-4  text-white py-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-blue-700 text-center mb-6 tracking-wide">
        Choose Your Prime Plan
      </h2>
      <p className="text-center text-lg text-neutral-300 mb-10 max-w-4xl mx-auto">
        New members enjoy a free 30-day trial of Prime. After, Prime is just $14.99 per month. Cancel anytime.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {primePlans.map((plan, index) => (
        //   <div
        //     key={index}
        //     className="w-full sm:w-[48%] lg:w-[23%] bg-white text-blue-900 rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[420px] relative"
        //   >
        <div
  key={index}
  className="w-full sm:w-[48%] lg:w-[23%] hover:bg-white/15 bg-white text-blue-900 rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[420px] relative transform transition duration-300 ease-in-out hover:scale-105"
>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                {plan.label && (
                  <span className={`text-xs font-bold px-2 py-1 rounded ${plan.tagColor} text-white`}>
                    {plan.label}
                  </span>
                )}
              </div>
              <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-base text-neutral-500">/month</span></p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle2 className="text-green-600 mr-2" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg transition duration-200"
            >
              Try Free for 30 Days
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeMembership;
