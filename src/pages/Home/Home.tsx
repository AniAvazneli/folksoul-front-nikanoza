import { Logo } from 'assets';

const Home = () => {
  return (
    <div
      id='main-page'
      className='w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] pl-[73px] pr-[92px] pt-6 pb-[78px]'
    >
      <header id='header' className='w-full flex justify-between items-center'>
        <img src={Logo} alt='' />
        <button
          id='login-btn'
          className='text-base text-[#FBFBFB] font-ninoMtavruli tracking-wide'
        >
          შესვლა
        </button>
      </header>
      <section
        id='animation-and-info'
        className='h-[calc(100%-100px)] w-full pt-11 flex justify-between items-center'
      >
        <div id='solar-system'></div>
        <div id='info' className='w-5/12 bg-[#FBD560] h-2/3 rounded-[20px]'>
          <div id='info-top' className='flex justify-between'>
            <div
              id='circle-sm'
              className='w-4 h-4 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] rounded-full mt-4 ml-5'
            ></div>
            <div
              id='image-box'
              className='w-80 h-80 rounded-full border border-[solid #FFFFFF] -mt-40 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] drop-shadow-[2px_4px_14px_#000000]'
            ></div>
            <div
              id='circle-sm'
              className='w-4 h-4 bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)] rounded-full mt-4 mr-5'
            ></div>
          </div>
          <p id='info-text' className='font-arial pl-16 pr-20 mt-9 text-lg'>
            დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
            დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის
            გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ
            იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება
            მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“
            ეწოდება.
            <br /> <br />
            დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს.
            ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა
            ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან.
            პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან
            და სწრაფად.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
