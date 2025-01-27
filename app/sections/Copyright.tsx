import Link from "next/link";

const Copyright = () => {
  return (
    <div className="py-6 flex flex-col justify-center items-center font-medium text-base sm:text-base border-t">
      <p>&copy; {new Date().getFullYear()} Wibowo Mulyo</p>
    </div>
  );
};
export default Copyright;
