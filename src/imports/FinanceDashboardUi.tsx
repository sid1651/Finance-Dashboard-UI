import svgPaths from "./svg-l6imwcxkrv";

function Heading() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-white tracking-[0.3955px]">Dashboard Overview</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Track your financial summary and spending patterns</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.289px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Total Balance</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SummaryCards1() {
  return (
    <div className="bg-[rgba(28,57,142,0.2)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="SummaryCards">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="h-[72px] relative shrink-0 w-[251.664px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
        <CardTitle />
        <SummaryCards1 />
      </div>
    </div>
  );
}

function SummaryCards2() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="SummaryCards">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[0.3955px] whitespace-nowrap">$168,992.00</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[12px] top-[5.31px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[139.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#05df72] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">83.9% savings rate</p>
      </div>
    </div>
  );
}

function SummaryCards3() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="SummaryCards">
      <Text />
    </div>
  );
}

function CardContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[251.664px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
        <SummaryCards2 />
        <SummaryCards3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex flex-col gap-[24px] h-[182px] items-start left-0 p-px rounded-[14px] top-0 w-[253.664px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.383px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Total Income</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SummaryCards4() {
  return (
    <div className="bg-[rgba(13,84,43,0.2)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="SummaryCards">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[251.664px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
        <CardTitle1 />
        <SummaryCards4 />
      </div>
    </div>
  );
}

function SummaryCards5() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="SummaryCards">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[0.3955px] whitespace-nowrap">$201,346.00</p>
    </div>
  );
}

function SummaryCards6() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="SummaryCards">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[-0.1504px] whitespace-nowrap">All-time total</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[251.664px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
        <SummaryCards5 />
        <SummaryCards6 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex flex-col gap-[24px] h-[182px] items-start left-[277.66px] p-px rounded-[14px] top-0 w-[253.664px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader1 />
      <CardContent1 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.227px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Total Expenses</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ba14b00} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a844880} id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function SummaryCards7() {
  return (
    <div className="bg-[rgba(130,24,26,0.2)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="SummaryCards">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="h-[72px] relative shrink-0 w-[251.672px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative size-full">
        <CardTitle2 />
        <SummaryCards7 />
      </div>
    </div>
  );
}

function SummaryCards8() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="SummaryCards">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-white tracking-[0.3955px]">$32,354.00</p>
    </div>
  );
}

function SummaryCards9() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="SummaryCards">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[-0.1504px] whitespace-nowrap">All-time total</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[251.672px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
        <SummaryCards8 />
        <SummaryCards9 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex flex-col gap-[24px] h-[182px] items-start left-[555.33px] p-px rounded-[14px] top-0 w-[253.672px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader2 />
      <CardContent2 />
    </div>
  );
}

function SummaryCards() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="SummaryCards">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.67%_1.46%_19.67%_18.95%]" data-name="Group">
      <div className="absolute inset-[-0.21%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273 237">
          <g id="Group">
            <path d="M0 236.5H273" id="Vector" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 177.5H273" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 118.5H273" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 59.5H273" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 0.5H273" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[1.67%_1.46%_19.67%_18.95%]" data-name="Group">
      <div className="absolute inset-[0_-0.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 274 236">
          <g id="Group">
            <path d="M0.5 0V236" id="Vector" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M55.1 0V236" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M109.7 0V236" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M164.3 0V236" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M273.5 0V236" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[1.67%_1.46%_19.67%_18.95%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[80.33%_76.68%_13.16%_14.58%]" data-name="Group">
      <div className="absolute inset-[80.33%_81.05%_17.67%_18.95%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_76.68%_13.16%_14.58%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">11/25</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[80.33%_60.47%_13.16%_30.2%]" data-name="Group">
      <div className="absolute inset-[80.33%_65.13%_17.67%_34.87%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_60.47%_13.16%_30.2%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">12/25</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[80.33%_44.4%_13.16%_45.98%]" data-name="Group">
      <div className="absolute inset-[80.33%_49.21%_17.67%_50.79%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_44.4%_13.16%_45.98%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">01/26</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[80.33%_28.34%_13.16%_61.75%]" data-name="Group">
      <div className="absolute inset-[80.33%_33.29%_17.67%_66.71%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_28.34%_13.16%_61.75%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">02/26</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[80.33%_12.27%_13.16%_77.52%]" data-name="Group">
      <div className="absolute inset-[80.33%_17.38%_17.67%_82.62%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_12.27%_13.16%_77.52%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">03/26</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[80.33%_-0.17%_13.16%_89.97%]" data-name="Group">
      <div className="absolute inset-[80.33%_1.46%_17.67%_98.54%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.84%_-0.17%_13.16%_89.97%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">04/26</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[80.33%_-0.17%_13.16%_14.58%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[80.33%_-0.17%_13.16%_14.58%]" data-name="Group">
      <div className="absolute inset-[80.33%_1.46%_19.67%_18.95%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273 1">
            <path d="M0 0.5H273" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[77.75%_81.05%_17.25%_10.2%]" data-name="Group">
      <div className="absolute inset-[80.33%_81.05%_19.67%_17.2%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[77.75%_83.38%_17.25%_10.2%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">$0k</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[58.09%_81.05%_36.91%_8.45%]" data-name="Group">
      <div className="absolute inset-[60.67%_81.05%_39.33%_17.2%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.09%_83.38%_36.91%_8.45%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">$15k</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[38.42%_81.05%_56.58%_7.87%]" data-name="Group">
      <div className="absolute inset-[41%_81.05%_59%_17.2%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38.42%_83.38%_56.58%_7.87%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">$30k</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[18.75%_81.05%_76.25%_7.87%]" data-name="Group">
      <div className="absolute inset-[21.33%_81.05%_78.67%_17.2%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[18.75%_83.38%_76.25%_7.87%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">$45k</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[0.42%_81.05%_94.58%_7.87%]" data-name="Group">
      <div className="absolute inset-[1.67%_81.05%_98.33%_17.2%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.42%_83.38%_94.58%_7.87%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">$60k</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[0.42%_81.05%_17.25%_7.87%]" data-name="Group">
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[0.42%_81.05%_17.25%_7.87%]" data-name="Group">
      <div className="absolute inset-[1.67%_81.05%_19.67%_18.95%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 236">
            <path d="M0.5 0V236" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group12 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[18.45%_0_23.8%_17.49%]" data-name="Group">
      <div className="absolute inset-[-0.58%_-0.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 175.249">
          <g id="Group">
            <path d={svgPaths.p17e1e100} id="Vector" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
            <g id="Group_2">
              <path d={svgPaths.p34ec0400} fill="var(--fill-0, #10B981)" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
              <path d={svgPaths.p1265da80} fill="var(--fill-0, #10B981)" id="Vector_3" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
              <path d={svgPaths.p6ce2680} fill="var(--fill-0, #10B981)" id="Vector_4" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
              <path d={svgPaths.pebea700} fill="var(--fill-0, #10B981)" id="Vector_5" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
              <path d={svgPaths.p36f000} fill="var(--fill-0, #10B981)" id="Vector_6" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
              <path d={svgPaths.pd43c500} fill="var(--fill-0, #10B981)" id="Vector_7" stroke="var(--stroke-0, #10B981)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[18.45%_0_23.8%_17.49%]" data-name="Group">
      <div className="absolute inset-[-0.58%_-0.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 175.249">
          <g id="Group">
            <path d={svgPaths.p17e1e100} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
            <g id="Group_2">
              <path d={svgPaths.p34ec0400} fill="var(--fill-0, #EF4444)" id="Vector_2" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
              <path d={svgPaths.p1265da80} fill="var(--fill-0, #EF4444)" id="Vector_3" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
              <path d={svgPaths.p6ce2680} fill="var(--fill-0, #EF4444)" id="Vector_4" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
              <path d={svgPaths.pebea700} fill="var(--fill-0, #EF4444)" id="Vector_5" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
              <path d={svgPaths.p36f000} fill="var(--fill-0, #EF4444)" id="Vector_6" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
              <path d={svgPaths.pd43c500} fill="var(--fill-0, #EF4444)" id="Vector_7" stroke="var(--stroke-0, #EF4444)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[343px]" data-name="Surface">
      <Group />
      <Group3 />
      <Group11 />
      <Group18 />
      <Group19 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute left-0 size-[14px] top-[6.79px]" data-name="Surface">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Surface">
          <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #10B981)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[24px] left-[77.12px] top-0 w-[71.211px]" data-name="List Item">
      <Surface1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[45px] not-italic text-[#10b981] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Income</p>
    </div>
  );
}

function Surface2() {
  return (
    <div className="absolute left-0 size-[14px] top-[6.79px]" data-name="Surface">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Surface">
          <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[24px] left-[158.33px] top-0 w-[87.555px]" data-name="List Item">
      <Surface2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[53.5px] not-italic text-[#ef4444] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Expenses</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[24px] left-[5px] top-[271px] w-[333px]" data-name="Legend">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="absolute h-[300px] left-[24px] top-[114px] w-[343px]" data-name="LineChart">
      <Surface />
      <Legend />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Balance Trend</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[292px]">Monthly income and expenses over the last 6 months</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[326.5_0_0] h-[60px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <CardTitle3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 3.33333V0.666667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-between left-[24px] top-[24px] w-[342.5px]" data-name="Container">
      <Container3 />
      <Button />
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="absolute h-[90px] left-0 top-0 w-[390.5px]" data-name="CardHeader">
      <Container2 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[#1e2939] border border-[#364153] border-solid h-[472px] left-0 rounded-[14px] top-0 w-[392.5px]" data-name="Card">
      <LineChart />
      <CardHeader3 />
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Top Spending Categories</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Your highest expense categories</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[326.5_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <CardTitle4 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 3.33333V0.666667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function CategoryBreakdownChart() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-[24px] top-[24px] w-[342.5px]" data-name="CategoryBreakdownChart">
      <Container4 />
      <Button1 />
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="h-[70px] relative shrink-0 w-[390.5px]" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CategoryBreakdownChart />
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[1.67%_1.46%_11.67%_36.44%]" data-name="Group">
      <div className="absolute inset-[-0.19%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 261">
          <g id="Group">
            <path d="M0 16.75H213" id="Vector" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 49.25H213" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 81.75H213" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 114.25H213" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 146.75H213" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 179.25H213" id="Vector_6" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 211.75H213" id="Vector_7" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 244.25H213" id="Vector_8" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 0.5H213" id="Vector_9" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M0 260.5H213" id="Vector_10" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[1.67%_1.46%_11.67%_36.44%]" data-name="Group">
      <div className="absolute inset-[0_-0.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 214 260">
          <g id="Group">
            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M53.75 0V260" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M107 0V260" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M160.25 0V260" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
            <path d="M213.5 0V260" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[1.67%_1.46%_11.67%_36.44%]" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[88.33%_60.35%_5.16%_33.24%]" data-name="Group">
      <div className="absolute inset-[88.33%_63.56%_9.67%_36.44%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_60.35%_5.16%_33.24%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">$0k</p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[88.33%_44.83%_5.16%_48.76%]" data-name="Group">
      <div className="absolute inset-[88.33%_48.03%_9.67%_51.97%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_44.83%_5.16%_48.76%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">$3k</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[88.33%_29.3%_5.16%_64.29%]" data-name="Group">
      <div className="absolute inset-[88.33%_32.51%_9.67%_67.49%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_29.3%_5.16%_64.29%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">$5k</p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[88.33%_13.78%_5.16%_79.81%]" data-name="Group">
      <div className="absolute inset-[88.33%_16.98%_9.67%_83.02%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_13.78%_5.16%_79.81%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">$8k</p>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[88.33%_-0.12%_5.16%_91.95%]" data-name="Group">
      <div className="absolute inset-[88.33%_1.46%_9.67%_98.54%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.84%_-0.12%_5.16%_91.95%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-center whitespace-nowrap">$10k</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[88.33%_-0.12%_5.16%_33.24%]" data-name="Group">
      <Group25 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[88.33%_-0.12%_5.16%_33.24%]" data-name="Group">
      <div className="absolute inset-[88.33%_1.46%_11.67%_36.44%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 1">
            <path d="M0 0.5H213" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group24 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[4.5%_63.56%_90.5%_10.79%]" data-name="Group">
      <div className="absolute inset-[7.08%_63.56%_92.92%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[4.5%_65.89%_90.5%_10.79%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">{`Bills & Utilities`}</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[15.34%_63.56%_79.66%_16.03%]" data-name="Group">
      <div className="absolute inset-[17.92%_63.56%_82.08%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[15.34%_65.89%_79.66%_16.03%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[26.17%_63.56%_68.83%_9.62%]" data-name="Group">
      <div className="absolute inset-[28.75%_63.56%_71.25%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.17%_65.89%_68.83%_9.62%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Transportation</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[37%_63.56%_58%_11.08%]" data-name="Group">
      <div className="absolute inset-[39.58%_63.56%_60.42%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[37%_65.89%_58%_11.08%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">{`Food & Dining`}</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[47.84%_63.56%_47.16%_24.49%]" data-name="Group">
      <div className="absolute inset-[50.42%_63.56%_49.58%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[47.84%_65.89%_47.16%_24.49%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Other</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[58.67%_63.56%_36.33%_17.49%]" data-name="Group">
      <div className="absolute inset-[61.25%_63.56%_38.75%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.67%_65.89%_36.33%_17.49%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Education</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[69.5%_63.56%_25.5%_18.37%]" data-name="Group">
      <div className="absolute inset-[72.08%_63.56%_27.92%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[69.5%_65.89%_25.5%_18.37%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Shopping</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[80.34%_63.56%_14.66%_10.5%]" data-name="Group">
      <div className="absolute inset-[82.92%_63.56%_17.08%_34.69%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
            <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[80.34%_65.89%_14.66%_10.5%] leading-[normal] not-italic text-[#fafafa] text-[12px] text-right whitespace-nowrap">Entertainment</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[4.5%_63.56%_14.66%_9.62%]" data-name="Group">
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
      <Group39 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[1.67%_63.56%_11.67%_9.62%]" data-name="Group">
      <div className="absolute inset-[1.67%_63.56%_11.67%_36.44%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 260">
            <path d="M0.5 0V260" id="Vector" stroke="var(--stroke-0, #666666)" />
          </svg>
        </div>
      </div>
      <Group31 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute inset-[2.75%_7.1%_88.58%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.66 26">
        <g id="Group">
          <path d={svgPaths.p3e42c500} fill="var(--fill-0, #3B82F6)" id="Bills & Utilities-0" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute inset-[13.58%_22.25%_77.75%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141.688 26">
        <g id="Group">
          <path d={svgPaths.p11fcba00} fill="var(--fill-0, #3B82F6)" id="Healthcare-5" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute inset-[24.42%_43.26%_66.92%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.6297 26">
        <g id="Group">
          <path d={svgPaths.p135cafb0} fill="var(--fill-0, #3B82F6)" id="Transportation-3" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute inset-[35.25%_45.45%_56.08%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0895 26">
        <g id="Group">
          <path d={svgPaths.p23a3af00} fill="var(--fill-0, #3B82F6)" id="Food & Dining-4" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute inset-[46.08%_45.7%_45.25%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.2588 26">
        <g id="Group">
          <path d={svgPaths.p1ebdd200} fill="var(--fill-0, #3B82F6)" id="Other-7" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute inset-[56.92%_46.18%_34.42%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.6187 26">
        <g id="Group">
          <path d={svgPaths.p13f3180} fill="var(--fill-0, #3B82F6)" id="Education-1" />
        </g>
      </svg>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute inset-[67.75%_48.74%_23.58%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.8218 26">
        <g id="Group">
          <path d={svgPaths.p1666be00} fill="var(--fill-0, #3B82F6)" id="Shopping-2" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute inset-[78.58%_48.87%_12.75%_36.44%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.3745 26">
        <g id="Group">
          <path d={svgPaths.p1d972700} fill="var(--fill-0, #3B82F6)" id="Entertainment-6" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[2.75%_7.1%_12.75%_36.44%]" data-name="Group">
      <Group42 />
      <Group43 />
      <Group44 />
      <Group45 />
      <Group46 />
      <Group47 />
      <Group48 />
      <Group49 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[2.75%_7.1%_12.75%_36.44%]" data-name="Group">
      <Group41 />
    </div>
  );
}

function Surface3() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[343px]" data-name="Surface">
      <Group20 />
      <Group23 />
      <Group30 />
      <Group40 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="absolute h-[300px] left-[24px] top-0 w-[343px]" data-name="BarChart">
      <Surface3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[9px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid h-[36px] left-[24px] rounded-[8px] top-[316px] w-[148.914px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[89px] not-italic text-[#fafafa] text-[14px] text-center top-[7.5px] tracking-[-0.1504px] whitespace-nowrap">Add Category</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[390.5px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <BarChart />
        <Button2 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex flex-col gap-[24px] h-[472px] items-start left-[416.5px] p-px rounded-[14px] top-0 w-[392.5px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader4 />
      <CardContent3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[472px] relative shrink-0 w-full" data-name="Container">
      <Card3 />
      <Card4 />
    </div>
  );
}

function CheckboxSelectAll() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[11.75px]" data-name="Checkbox - Select all" />;
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[26.992px]" data-name="TableHead">
      <CheckboxSelectAll />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[58.91px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[36px] left-[8px] rounded-[8px] top-[1.75px] w-[86.914px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[27.5px] not-italic text-[#fafafa] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">Date</p>
      <Icon7 />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[26.99px] top-0 w-[115.773px]" data-name="TableHead">
      <Button3 />
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[142.77px] top-0 w-[149.508px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[8px] not-italic text-[#fafafa] text-[14px] top-[10.25px] tracking-[-0.1504px] whitespace-nowrap">Description</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[292.27px] top-0 w-[133.922px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[8px] not-italic text-[#fafafa] text-[14px] top-[10.25px] tracking-[-0.1504px] whitespace-nowrap">Category</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[426.2px] top-0 w-[92.57px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[8px] not-italic text-[#fafafa] text-[14px] top-[10.25px] tracking-[-0.1504px] whitespace-nowrap">Type</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[79.75px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcaa3f40} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.3333 13.3333V2.66667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p216cf1e0} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.66667 2.66667V13.3333" id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[36px] left-[8px] rounded-[8px] top-[1.75px] w-[107.75px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[38px] not-italic text-[#fafafa] text-[14px] text-center top-[8.5px] tracking-[-0.1504px] whitespace-nowrap">Amount</p>
      <Icon8 />
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[518.77px] top-0 w-[139.211px]" data-name="TableHead">
      <Button4 />
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[657.98px] top-0 w-[99.023px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[8px] not-italic text-[#fafafa] text-[14px] top-[10.25px] tracking-[-0.1504px] whitespace-nowrap">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(30,41,57,0.5)] border-[#262626] border-b border-solid h-[40px] left-0 top-0 w-[757px]" data-name="TableRow">
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[757px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function CheckboxSelectRow() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 4, 2026</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Design Work</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container7 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[74.492px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Freelance</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(13,84,43,0.2)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[60px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#05df72] text-[12px] top-[3px] whitespace-nowrap">income</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#05df72] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">+$1,245.00</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container9 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-0 w-[757px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function CheckboxSelectRow1() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 3, 2026</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Rent</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container11 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[101.313px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">{`Bills & Utilities`}</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$247.00</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container12 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container13 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[49px] w-[757px]" data-name="TableRow">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function CheckboxSelectRow2() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 3, 2026</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Design Work</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container15 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[74.492px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Freelance</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[rgba(13,84,43,0.2)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[60px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#05df72] text-[12px] top-[3px] whitespace-nowrap">income</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#05df72] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">+$870.00</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container16 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container17 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[98px] w-[757px]" data-name="TableRow">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function CheckboxSelectRow3() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 3, 2026</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Training</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container19 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[75.617px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Education</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge6 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$47.00</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container20 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container21 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[147px] w-[757px]" data-name="TableRow">
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function CheckboxSelectRow4() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 2, 2026</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Books</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container23 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[72.945px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Shopping</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge8 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$34.00</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container24 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container25 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[196px] w-[757px]" data-name="TableRow">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function CheckboxSelectRow5() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 2, 2026</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Car Maintenance</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container27 />
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[103.047px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Transportation</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge10 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge11 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$48.00</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container28 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container29 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[245px] w-[757px]" data-name="TableRow">
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function CheckboxSelectRow6() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell42() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow6 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 1, 2026</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Project Payment</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container31 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[74.492px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Freelance</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge12 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[rgba(13,84,43,0.2)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[60px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#05df72] text-[12px] top-[3px] whitespace-nowrap">income</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge13 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#05df72] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">+$749.00</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container32 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container33 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[294px] w-[757px]" data-name="TableRow">
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
    </div>
  );
}

function CheckboxSelectRow7() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell49() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 1, 2026</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Consulting Fee</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container35 />
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[74.492px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Freelance</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge14 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[rgba(13,84,43,0.2)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[60px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#05df72] text-[12px] top-[3px] whitespace-nowrap">income</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge15 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#05df72] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">+$1,558.00</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container36 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container37 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[343px] w-[757px]" data-name="TableRow">
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function CheckboxSelectRow8() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell56() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Apr 1, 2026</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[49px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Grocery Shopping</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[49px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container39 />
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[99px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">{`Food & Dining`}</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[49px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge16 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[49px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge17 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$42.00</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[49px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container40 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button21 />
      <Button22 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[49px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container41 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#262626] border-b border-solid h-[49px] left-0 top-[392px] w-[757px]" data-name="TableRow">
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function CheckboxSelectRow9() {
  return <div className="absolute bg-[rgba(38,38,38,0.3)] border border-[#262626] border-solid left-[8px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[16.5px]" data-name="Checkbox - Select row" />;
}

function TableCell63() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[26.992px]" data-name="TableCell">
      <CheckboxSelectRow9 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[99.773px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Mar 31, 2026</p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[48.5px] left-[26.99px] top-0 w-[115.773px]" data-name="TableCell">
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[133.508px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#fafafa] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Tuition</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[48.5px] left-[142.77px] top-0 w-[149.508px]" data-name="TableCell">
      <Container43 />
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute border border-[#262626] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[75.617px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#fafafa] text-[12px] top-[3px] whitespace-nowrap">Education</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[48.5px] left-[292.27px] top-0 w-[133.922px]" data-name="TableCell">
      <Badge18 />
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-[rgba(130,24,26,0.6)] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[8px] overflow-clip rounded-[8px] top-[13.5px] w-[66.289px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-white top-[3px] whitespace-nowrap">expense</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[48.5px] left-[426.2px] top-0 w-[92.57px]" data-name="TableCell">
      <Badge19 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[123.211px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#ff6467] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">-$118.00</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[48.5px] left-[518.77px] top-0 w-[139.211px]" data-name="TableCell">
      <Container44 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p85cdd00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-start left-[8px] top-[8.5px] w-[83.023px]" data-name="Container">
      <Button23 />
      <Button24 />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[48.5px] left-[657.98px] top-0 w-[99.023px]" data-name="TableCell">
      <Container45 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[48.5px] left-0 top-[441px] w-[757px]" data-name="TableRow">
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[489.5px] left-0 top-[40px] w-[757px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[529.5px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[531.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220.055px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Showing 1 to 10 of 10 transactions</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Rows per page:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15.492px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] h-[36px] relative rounded-[8px] shrink-0 w-[70px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <Text1 />
        <Icon29 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[36px] relative shrink-0 w-[177.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Paragraph3 />
        <Button25 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p6153ec0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p29881d00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] opacity-50 relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] opacity-50 relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Page 1 of 1</p>
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] opacity-50 relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1ab7c740} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30c11e00} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[rgba(38,38,38,0.3)] opacity-50 relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-px relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button26 />
        <Button27 />
        <Container51 />
        <Button28 />
        <Button29 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[36px] relative shrink-0 w-[424.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function TransactionsTable() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[583.5px] items-start left-[25px] top-[119px] w-[759px]" data-name="TransactionsTable">
      <Container5 />
      <Container46 />
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[24px] w-[759px]" data-name="CardTitle">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Recent Transactions</p>
    </div>
  );
}

function Dashboard1() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[50px] w-[759px]" data-name="Dashboard">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Latest financial activity</p>
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="absolute h-[70px] left-px top-px w-[807px]" data-name="CardHeader">
      <CardTitle5 />
      <Dashboard1 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#1e2939] h-[751.5px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TransactionsTable />
      <CardHeader5 />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex flex-col gap-[24px] h-[1541.5px] items-start left-[288px] top-[97px] w-[809px]" data-name="Dashboard">
      <Container />
      <SummaryCards />
      <Container1 />
      <Card5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px] whitespace-nowrap">Welcome back, User 👋</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[173px]">Track and understand your financial activity.</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[203.5_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.156px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Role:</p>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[#2b7fff] left-0 rounded-[16777200px] size-[8px] top-[6px]" data-name="Container" />;
}

function Header2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container55 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[37.5px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Admin</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Header2 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #A1A1A1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#364153] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text2 />
          <Icon34 />
        </div>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Header1 />
        <Button30 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="absolute h-[20px] left-[41px] top-[8px] w-[43.344px]" data-name="Header">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[22px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Export</p>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[94.34px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#364153] h-[36px] relative rounded-[8px] shrink-0 w-[121.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon35 />
        <Header3 />
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4_1989)" id="Icon">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11bc9dc0} id="Vector_4" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p191ca260} id="Vector_5" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe73b76f} id="Vector_8" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1df25380} id="Vector_9" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4_1989">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#364153] relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] py-px relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[36px] relative shrink-0 w-[349.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <SlotClone />
        <Button31 />
        <Button32 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex flex-col h-[65px] items-start left-[512px] pb-px px-[32px] top-0 w-[617px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#364153] border-b border-solid inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p219ccd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(25, 60, 184) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[70.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Finance</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[44px] relative shrink-0 w-[70.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[92px] relative shrink-0 w-[255px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pl-[24px] relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(28,57,142,0.2)] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <Icon39 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#51a2ff] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cf7de80} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ebe9ac0} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.5833V5.41667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <Icon40 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#d1d5dc] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Transactions</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3c797180} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3ac0b600} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <Icon41 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#d1d5dc] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Insights</p>
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Link">
      <Icon42 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44px] not-italic text-[#d1d5dc] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Settings</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[587_0_0] min-h-px min-w-px relative w-[255px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container62() {
  return <div className="bg-[#00c950] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#99a1af] text-[12px] top-px whitespace-nowrap">Current Role</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container62 />
        <Text5 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container61 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Switch role in header</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[73px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#364153] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[17px] px-[24px] relative size-full">
        <Container60 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[752px] items-start left-0 top-0 w-[255px]" data-name="SidebarContent">
      <Container56 />
      <Navigation />
      <Container59 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex items-center justify-center left-[243px] px-[4px] py-px rounded-[16777200px] size-[24px] top-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon43 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#1e2939] border-[#364153] border-r border-solid h-[752px] left-0 top-0 w-[256px]" data-name="Sidebar">
      <SidebarContent />
      <Button33 />
    </div>
  );
}

function SummaryCards10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="SummaryCards">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#171717] text-[12px] top-px whitespace-nowrap">Total income from all sources</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[28px] items-start left-0 pt-[6px] px-[12px] rounded-[8px] top-0 w-[189.688px]" data-name="Container">
      <SummaryCards10 />
    </div>
  );
}

function PopperContent() {
  return (
    <div className="absolute h-[28px] left-0 top-[-56px] w-[190px]" data-name="PopperContent">
      <Container63 />
    </div>
  );
}

export default function FinanceDashboardUi() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="Finance Dashboard UI">
      <Dashboard />
      <Header />
      <Sidebar />
      <PopperContent />
    </div>
  );
}