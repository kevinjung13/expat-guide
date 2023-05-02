import FiveYearCards from "../../Cards/About/FiveYearCards";

export default function FiveYears() {
  return (
    <>
      <section className="py-14 bg-stone-200">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h1 className="text-gray-800 pb-3 text-4xl font-semibold md:text-5xl">
              5+ Years
            </h1>
            <div className={"mt-3 max-w-xl"}>
              <p className={"pb-7"}>
                I have lived in Thailand for 5 and a half years, on 2 seperate
                occasions.
              </p>
              <ul>
                <li className={"pb-7"}>
                  I first moved to Bangkok in August 2015, and left Thailand in
                  December 2017 to take on a new role in the Maldives.
                </li>
                <li className={""}>
                  I returned again in December 2019 and left Bangkok recently
                  (February 2023) to live with my partner in Southern Thailand.
                </li>
              </ul>
            </div>
          </div>
          <FiveYearCards />
        </div>
      </section>
    </>
  );
}
