import Card from "@/components/card";

export default function Home() {
  let arr = [
    {
      tittle: {
        name: "1 task",
      },
      body: {
        text: "to do something",
      },
    },
    {
      tittle: {
        name: "2 task",
      },
      body: {
        text: "to do something 2",
      },
    },
    {
      tittle: {
        name: "3 task",
      },
      body: {
        text: "to do something 3",
      },
    },
    {
      tittle: {
        name: "3 task",
      },
      body: {
        text: "to do something 3",
      },
    },
  ];
  return (
    <main>
      <div className=' mb-[100px] flex justify-around'>
        <div className='    grid xl:grid-cols-3 xl:gap-x-[200px] md:gap-[20px] md:grid-cols-2 sm:grid-cols-1' >
          {arr.map((item: any, key: any) => (
            <Card props={item} key={key} className=' border border-red-800'/>
          ))}
        </div>
      </div>
    </main>
  );
}
