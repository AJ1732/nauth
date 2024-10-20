import { RotateGradientCard } from "@/components";

const col = [
  {
    id: 1,
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    className: "col-2",
  },
  {
    id: 3,
    className: "row-span-2",
  },
  {
    id: 4,
    className: "col-2",
  },
  {
    id: 5,
    className: "col-2",
  },
  {
    id: 6,
    className: "col-2",
  },
  {
    id: 7,
    className: "row-span-3",
  },
  {
    id: 8,
    className: "row-span-5",
  },
  {
    id: 9,
    className: "row-span-4",
  },
  {
    id: 10,
    className: "row-span-2",
  },
];

const Anim = () => {
  return (
    <div className="grid size-full max-w-md grid-cols-3 font-disket-mono grid-rows-8 gap-4 text-xs text-">
      {col.map(({ id, className }) => (
        <RotateGradientCard key={id} className={className}>
          {/* {id} */}
        </RotateGradientCard>
      ))}
    </div>
  );
};
export default Anim;
