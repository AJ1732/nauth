import { Loading } from "@/components";

const loading = () => {
  return (
    <div className="flex min-h-[calc(100dvh-6rem)] items-center justify-center py-20">
      <Loading />
    </div>
  );
};
export default loading;
