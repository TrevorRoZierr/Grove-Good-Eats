import ReservationsForm from "../components/(signinbody)/ReservationForm";

const Reservations = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-unbounded lg:mt-5 mt-3 lg:text-[4rem] text-[1.8rem] uppercase tracking-wider font-semibold cursor-pointer">
        Reservations
      </h1>
      <ReservationsForm />
    </div>
  );
};

export default Reservations;
