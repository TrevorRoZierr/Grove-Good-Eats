import ReservationCheck from "@/app/components/(reservationdetails)/ReservationCheck";

const ReserveDetails = () => {
  return (
    <div className="flec justify-center items-center text-center">
      <h1 className="text-xl font-medium lg:mt-6 mt-16 font-unbounded">
        Check your reservation details in this list
      </h1>
      <ReservationCheck />
    </div>
  );
};

export default ReserveDetails;
