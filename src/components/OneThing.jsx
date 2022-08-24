import CustomButton from "./CustomButton";

export default function OneThing({ thing, handleCompletedThing }) {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-center">{thing}</h2>
      <CustomButton
        text="Mark Done"
        handleCompletedThing={handleCompletedThing}
      />
    </>
  );
}
