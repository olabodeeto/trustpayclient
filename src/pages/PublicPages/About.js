import React from "react";
import reg from "../../Assets/reg.svg";
import sec from "../../Assets/sec.svg";
import swi from "../../Assets/swi.svg";
import us from "../../Assets/us.svg";
import Header from "../../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="py-40 bg-gray-50">
          <div className="flex flex-col lg:flex-row lg:w-10/12 m-auto">
            <div className="lg:w-6/12 px-4">
              <div className="mb-10">
                <h2 className="text-4xl text-gray-600 font-extralight bg-blue-50 inline pr-4 pt-4 pb-4">
                  Why trustpay?
                </h2>
              </div>
              <p className="mb-4 text-gray-500">
                Research has shown that Over 10 Million of online transactions
                happens daily with possibility of fraud, which is a serious
                issue. This problem has placed limitations on economic
                activities in the E- commerce and other business opportunities.
              </p>
              <p className="mb-4 text-gray-500">
                Things like receiving poor service or low quality products which
                is totally different from what you paid for - is fraud.
              </p>

              <p className="mb-4 text-gray-500">
                Excessive delay of your work or goods especially when it’s no
                longer useful because the date has elapsed - is fraud.
              </p>

              <p className="mb-4 text-gray-500">
                Getting blocked on any social media handle after you have paid
                for something or refusing to pick up call or replying your
                messages - is fraud.
              </p>

              <p className="mb-4 text-gray-500">
                The truth remains that things are always cheaper online but the
                fear of fraud is really affecting both buyers & sellers, service
                providers & clients.
              </p>

              <p className="mb-4 text-gray-500">
                This is why TRUSTPAY has come on board with a clear vision of
                becoming the global best online and offline platform in all
                commerce sector.
              </p>

              <p className="mb-4 text-gray-500">
                This is why TRUSTPAY has come on board with a clear vision of
                becoming the global best online and offline platform in all
                commerce sector.
              </p>

              <p className="mb-4 text-gray-500">
                1. Our mission is to eliminate all forms of online scams and
                fraud.
                <br />
                2. To connect and protect vendors and customers regardless of
                their locations in the World <br />
                3. To fully open up the opportunities in the E-commerce
                industries.
                <br />
              </p>

              <p className="mb-4 text-gray-500">
                1. Our major goal is to increase sales of vendors, whether
                product or services and put a smile on their faces after every
                transaction.
                <br />
                2. To boost the confidence in all transactions to accelerate
                economic activities without fear or risk of scam again. <br />
                3. To fully open up the opportunities in the E-commerce
                industries.
                <br />
              </p>

              <p className="mb-4 text-gray-500">
                - In summary we are in business to provide the safest online
                platform for transactions across the world.
                <br />- We are proud to say that we are offering a solution to a
                known global problem.
              </p>
              <p className="mb-6 text-gray-500">
                <p className="font-bold mb-4">
                  👉 Our services include but not limited to the following:
                </p>
                <ul>
                  <li>1. Anti-Fraud E-wallet payment system</li>
                  <li>
                    2. Provision of unique and personalized online stores.
                  </li>
                  <li>
                    3. Provision a most easy and user friendly platform for
                    transactions.
                  </li>
                  <li>
                    5. Operation of TRUSTPAY logistics and safe delivery
                    services to eradicate fake reports and confirmations.
                  </li>
                  <li>
                    6. Unique and customized Mobile App development to suit your
                    business
                  </li>
                </ul>
              </p>

              <p className="mb-6 text-gray-500">
                <p className="font-bold mb-4">
                  ✅ APPLICATION OF TRUSTPAY BUSINESS MODEL
                </p>
                <p>
                  The need for our platform spread across the continent and the
                  applicability of our business model is huge. It can be used in
                  the following:
                </p>
                <ul>
                  <li>1. Online stores</li>
                  <li>2. Local shops and purchasing</li>
                  <li>3. Flight and hotel booking</li>
                  <li>4. Int'l shoppers</li>
                  <li>5. Logistics and delivery</li>
                  <li>6. Wallet funding and Withdrawals</li>
                  <li>7. INT' L business and importation</li>
                  <li>9. Many more.</li>
                </ul>
              </p>
            </div>
            <div className="mt-10 lg:mt-0 pl-5 lg:pl-10">
              <div className="flex mb-6 gap-5">
                <div>
                  <img src={reg} alt="" className="w-14" />
                </div>

                <p className="mt-4 text-xl text-gray-600">
                  Regulatory Compliance
                </p>
              </div>
              <div className="flex mb-5 gap-5">
                <div>
                  <img src={sec} alt="" className="w-14" />
                </div>

                <p className="mt-4 text-xl text-gray-600">Security First</p>
              </div>
              <div className="flex mb-5 gap-5">
                <div>
                  <img src={swi} alt="" className="w-14" />
                </div>

                <p className="mt-4 text-xl text-gray-600">Swift Disbursement</p>
              </div>

              <div className="flex mb-5 gap-6 mt-4">
                <div>
                  <img src={us} alt="" className="w-12" />
                </div>

                <p className="mt-4 text-xl text-gray-600">User’s support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
