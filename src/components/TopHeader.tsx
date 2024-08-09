import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="bg-black   text-white/90">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-1">
        <p className="flex items-center justify-center font-semibold">
          {" "}
          <CiDeliveryTruck className="text-[#ffb342] text-3xl font-bold mr-1" />{" "}
          FREE Express Shipping On Orders $570+
        </p>
        <div className="flex items-center justify-center   gap-5">
          <p className="topHeaderItem">
            English <IoChevronDownSharp />
          </p>
          <p className="topHeaderItem">
            USD <IoChevronDownSharp />
          </p>
          <p className="topHeaderItem">
            Setting <IoChevronDownSharp />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
