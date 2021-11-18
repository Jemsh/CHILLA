


const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');


const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

// Benifits Start
const benifitsTitleEl = document.querySelector('.benifitsTitle');

const benifitsHeadOneEl = document.querySelector(".benifitsHeadOne");
const benifitPointOneOneEl = document.querySelector(".benifitPointOneOne");

const benifitsHeadTwoEl = document.querySelector(".benifitsHeadTwo");
const benifitPointTwoEl = document.querySelector(".benifitPointTwo");

const benifitsHeadThreeEl = document.querySelector(".benifitsHeadThree");
const benifitPointThreeEl = document.querySelector(".benifitPointThree");

const benifitsHeadFoureEl = document.querySelector(".benifitsHeadFoure");
const benifitPointFoureEl = document.querySelector(".benifitPointFoure");

const benifitsHeadFiveEl = document.querySelector(".benifitsHeadFive");
const benifitPointFiveEl = document.querySelector(".benifitPointFive");

const benifitsHeadSixEl = document.querySelector(".benifitsHeadSix");
const benifitPointSixEl = document.querySelector(".benifitPointSix");

const whyTitleEl = document.querySelector(".whyTitle");
const whyDescriptionEl = document.querySelector(".whyDescription");
// Benifits End

// Requirement Start
const requirementsTitleEl = document.querySelector(".requirementsTitle");
const requirementsSubTitleEl = document.querySelector(".requirementsSubTitle");

const requirementsHeadOneEl = document.querySelector(".requirementsHeadOne");
const requirementsPointOneEl = document.querySelector(".requirementsPointOne");

const requirementsHeadTwoEl = document.querySelector(".requirementsHeadTwo");
const requirementsPointTwoEl = document.querySelector(".requirementsPointTwo");

const requirementsHeadThreeEl = document.querySelector(".requirementsHeadThree");
const requirementsPointThreeEl = document.querySelector(".requirementsPointThree");

const requirementsHeadFoureEl = document.querySelector(".requirementsHeadFoure");
const requirementsPointFoureEl = document.querySelector(".requirementsPointFoure");
// Requirement End

//Financials Start

const financialsTitleEl = document.querySelector(".financialsTitle");

// //Investment Start
const investmentHeadEl = document.querySelector(".investmentHead");
const investmentPointOneEl = document.querySelector(".investmentPointOne");
const investmentPointTwoEl = document.querySelector(".investmentPointTwo");
const investmentPointThreeEl = document.querySelector(".investmentPointThree");
// //Investment End

// //Expenses Start
const expensesHeadEl = document.querySelector(".expensesHead");
const expensesPointTwoEl = document.querySelector(".expensesPointTwo");
const expensesPointThreeEl = document.querySelector(".expensesPointThree");
// //Expenses End

// //Roi Start
const roiHeadEl = document.querySelector(".roiHead");
const roiPointOneEl = document.querySelector(".roiPointOne");
const roiPointTwoEl = document.querySelector(".roiPointTwo");
// //Roi End

//Finincials End

//Call or WhatsApp Start
const callHeadEl = document.querySelector(".callHead");
const callDescriptionEl = document.querySelector(".callDescription");
//Call or WhatsApp End

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;

        // Benifits Start
        benifitsTitleEl.textContent = data[attr].benifitsTitle;
        benifitsHeadOneEl.textContent = data[attr].benifitsHeadOne;
        benifitPointOneOneEl.textContent = data[attr].benifitPointOneOne;

        benifitsHeadTwoEl.textContent = data[attr].benifitsHeadTwo;
        benifitPointTwoEl.textContent = data[attr].benifitPointTwo;

        benifitsHeadThreeEl.textContent = data[attr].benifitsHeadThree;
        benifitPointThreeEl.textContent = data[attr].benifitPointThree;

        benifitsHeadFoureEl.textContent = data[attr].benifitsHeadFoure;
        benifitPointFoureEl.textContent = data[attr].benifitPointFoure;

        benifitsHeadFiveEl.textContent = data[attr].benifitsHeadFive;
        benifitPointFiveEl.textContent = data[attr].benifitPointFive;

        benifitsHeadSixEl.textContent = data[attr].benifitsHeadSix;
        benifitPointSixEl.textContent = data[attr].benifitPointSix;
        //Benifits End

        // Why Start
        whyTitleEl.textContent = data[attr].whyTitle;
        whyDescriptionEl.textContent = data[attr].whyDescription;
        // Why End

        //Requirement Start
        requirementsTitleEl.textContent = data[attr].requirementsTitle;
        requirementsSubTitleEl.textContent = data[attr].requirementsSubTitle;

        requirementsHeadOneEl.textContent = data[attr].requirementsHeadOne;
        requirementsPointOneEl.textContent = data[attr].requirementsPointOne;

        requirementsHeadTwoEl.textContent = data[attr].requirementsHeadTwo;
        requirementsPointTwoEl.textContent = data[attr].requirementsPointTwo;

        requirementsHeadThreeEl.textContent = data[attr].requirementsHeadThree;
        requirementsPointThreeEl.textContent = data[attr].requirementsPointThree;

        requirementsHeadFoureEl.textContent = data[attr].requirementsHeadFoure;
        requirementsPointFoureEl.textContent = data[attr].requirementsPointFoure;
        //Requirement End

        // //Finincials Start
        financialsTitleEl.textContent = data[attr].financialsTitle;

        // //Investment Start
        investmentHeadEl.textContent = data[attr].investmentHead;
        investmentPointOneEl.textContent = data[attr].investmentPointOne;
        investmentPointTwoEl.textContent = data[attr].investmentPointTwo;
        investmentPointThreeEl.textContent = data[attr].investmentPointThree;
        // //Investment End

        // //Expenses Start
        expensesHeadEl.textContent = data[attr].expensesHead;
        expensesPointTwoEl.textContent = data[attr].expensesPointTwo;
        expensesPointThreeEl.textContent = data[attr].expensesPointThree;
        // //Expenses End

        // //Roi Start
        roiHeadEl.textContent = data[attr].roiHead;
        roiPointOneEl.textContent = data[attr].roiPointOne;
        roiPointTwoEl.textContent = data[attr].roiPointTwo;
        // //Roi End

        // //Finincials End

        //Call or WhatsApp Start
        callHeadEl.textContent = data[attr].callHead;
        callDescriptionEl.textContent = data[attr].callDescription;
        //Call or WhatsApp End


    });
});



var data = {
    "english":
    {
        "title": "Are you now thinking of a guaranteed monthly income without  any headaches?",

        "titleTwo": "",

        "description": "Everyone knows that supermarkets are a highly profitable business in any crisis situation and its operations are always very difficult.We do all these difficult operations for you. We make good and right choices in every aspect of the business that will bring assured profit to you.We have acquired this art through experience and regular updates over 30 years. \nDo you want a regular monthly income without knowing any hassle or difficulty of this business? \nBe a part of the prestigious Chilla Supermarket Chains!\nThe rest is our guarantee!",

        // Benifits start
        "benifitsTitle": "Benefit of Chilla",

        "benifitsHeadOne": "Operations",
        "benifitPointOneOne": "Our Standard Of Procedures (SOP) are maintained in every aspect of the store | We furnish and execute the store.",

        "benifitsHeadTwo": "Team Management",
        "benifitPointTwo": "We recruit and train the teams as Store requires | Our revenue sharing program allows team to live better and perform better.",

        "benifitsHeadThree": "Inventory Management",
        "benifitPointThree": "Chilla purchases goods directly from companies that offer favorable prices |delivers only the stocks required by the store.",

        "benifitsHeadFoure": "Marketing",
        "benifitPointFoure": "We study and implement strategies that are tailored to your location | Every month,spend a certain amount on marketing for each store.",


        "benifitsHeadFive": "Private Labeling",
        "benifitPointFive": "Creating high-quality products under our brand name | Ensures that our products meet our customer's expectations.",

        "benifitsHeadSix": "Customer Relationship",
        "benifitPointSix": "Our purchasing system offers large discounts to our customers | Customer loyalty packages | Customer Relationship Management System.",
        // Benifits End

        //Why Start
        "whyTitle": "Why do you want to be a part of Chilla?",
        "whyDescription": "Business is not just a process to make profit, it is your recognition. It should not be a headache for you, it should give value to life. \nBe a member of the Chilla family that is spreading across Kerala. \nContribute your idea! \nLet's do it together!!",
        //Why End

        //Requirements Start
        "requirementsTitle": "Requirements",
        "requirementsSubTitle": "The rest is our responsibility!",

        "requirementsHeadOne": "Parking",
        "requirementsPointOne": "There should be at least 7+ car parking.",

        "requirementsHeadTwo": "Store Premises",
        "requirementsPointTwo": "Minimum sales floor should require 500 sq ft | Building must be new or well maintained.",

        "requirementsHeadThree": "Location",
        "requirementsPointThree": "There should be at least 1500 households within a radius of 5 km.",

        "requirementsHeadFoure": "Investor Eligibility",
        "requirementsPointFoure": "An investor should be part of the daily operation | The background of the investor should be impeccable.",
        //Requirements End

        // Meet Our Team Start
        "teamTitle": "Meet Our Team",
        // Meet Our Team End

        // Financials Start
        "financialsTitle": "Financials",

        "investmentHead": "Investment",
        "investmentPointOne": "25 lakh rupees is a fully refundable deposit amount which may vary based on your location.",
        "investmentPointTwo": "The franchise fee is Rs 250,000 /- + GST.",
        "investmentPointThree": "You only need to pay the actual cost of setting up the store.",

        "expensesHead": "Expenses",
        "expensesPointTwo": "All expenses are covered under our purview.",
        "expensesPointThree": "Marketing, Purchasing, Salaries, Customer loyalty programs, Electricity bills, Real Estate rent, and all other expenditures will be borne by the company.",

        "roiHead": "Return on Investment",
        "roiPointOne": "You will receive guaranteed revenue at the end of every month based on your sales.",
        "roiPointTwo": "The minimum guaranteed ROI is 7.02% and increases in line with sales up to 46.77%.",
        // Financials End

        //Call or WhatApp Start
        "callHead": "Don't miss this opportunity!",
        "callDescription": "Opportunity to be a branch of Chilla!.\nCall or WhatsApp to become a prestigious Chilla franchisee in your area now!",
        //Call or WhatApp End



    },
    //Malayalam Starts Here
    "malayalam":
    {
        "title": "തലവേദനകൾ ഇല്ലാതെ ഉറപ്പുള്ള ഒരു മാസാവരുമാനം ആണോ ഇപ്പോൾ നിങ്ങൾ ചിന്തിക്കുന്നത് ?",
        "description": "എല്ലാവർക്കും അറിയാം ഏത് പ്രീതിസന്ധി സാഹചര്യത്തിലും സൂപ്പർമാർക്കറ്റ് വളരെ ലാഭകരമായ ബിസിനസ്സാണെന്നും  എന്നാൽ അതിന്റെ പ്രവർത്തനം എല്ലായ്‌പോഴും  വളരെ പ്രയാസകരമാണെന്നും.നിങ്ങൾക്കായി ഈ പ്രയാസകരമായ എല്ലാ പ്രവർത്തനങ്ങളും ഞങ്ങൾ‌ ചെയ്യുന്നു. ബിസിനസിന്റെ എല്ലാ കാര്യങ്ങളിലും എല്ലാ ഭാഗങ്ങളിലും ഞങ്ങൾ ഉചിതവും  കൃത്യവുംമായ  തിരഞ്ഞെടുപ്പുകൾ നടത്തുന്നു, ഇത്  നിങ്ങൾക്ക്  ലാഭം ഉറപ്പാകുന്നു.ഇ ബിസിനെസ്സിൽ 30 വര്ഷമായിട്ടുള്ള ഞങ്ങളുടെ അനുഭവങ്ങളിലൂടെയും പതിവായ അപ്‌ഡേറ്റുകളിലൂടെയും ആണ് ഞങ്ങൾ ഈ കല സ്വന്തമാക്കിയത്.\nഈ ബിസിനസ്സിന്റെ ഒരു ബുദ്ധിമുട്ടും ഒരു പ്രയാസവും  അറിയാതെ നിങ്ങൾക്ക് എല്ലാ മാസവും വരുമാനം വേണ്ടേ? \nഎങ്കിൽ അഭിമാനകരമായ Chilla സൂപരമാർക്കറ്റ് ശൃംഖലകളുടെ ഭാഗമാകൂ!.\nബാക്കി ഞങ്ങളുടെ ഉറപ്പ് !",


        // Benifits start
        "benifitsTitle": "chilla യുടെ പ്രയോജനങ്ങൾ",

        "benifitsHeadOne": "ഓപ്പറേഷൻസ്",
        "benifitPointOneOne": "എല്ലാ സ്റ്റോറിലെയും എല്ലാ മേഖലയിലും ഒരേ സ്റ്റാൻഡേർഡ് നടപടിക്രമങ്ങൾ (SOP)  നിലനിർത്തുന്നു | ഞങ്ങൾ സ്റ്റോർ നിർമ്മിക്കുകയും പ്രവൃത്തിപ്പിക്കുകയും ചെയ്യുന്നു.",


        "benifitsHeadTwo": "ടീം മാനേജുമെന്റ്",
        "benifitPointTwo": "നിങ്ങളുടെ സ്റ്റോറിന് ആവശ്യാനുസരണം ടീമിനെ നിയമിക്കുന്നു, പരിശീലിപ്പിക്കുന്നു | വരുമാന പങ്കിടൽ പ്രോഗ്രാമിലൂടെ, മികച്ച രീതിയിൽ ജീവിക്കാനും മികച്ച പ്രകടനം നടത്താനും ടീമിനെ പ്രാപ്‌തമാക്കുന്നു.",


        "benifitsHeadThree": "സ്റ്റോക്ക് മാനേജ്മെന്റ്",
        "benifitPointThree": "കമ്പനികളുമായി സംസാരിച്ചു പ്രതേക വിലക്ക് ചരക്കുകൾ വാങ്ങിക്കുന്നു|ഓരോ സ്റ്റോറിലേക്കും ആവശ്യമുള്ളതു മാത്രം എത്തിച്ചുതരുന്നു|നിങ്ങളുടെ മാർക്കറ്റ് അനുസരിച്ച്‌ വിലനിർണ്ണയം നടത്തുന്നു.",


        "benifitsHeadFoure": "മാർക്കറ്റിംഗ്",
        "benifitPointFoure": "നിങ്ങളുടെ മാർക്കറ്റിനെ കുറിച്ച് പതിവായി പഠിച്ചു അനുയോജ്യമായ തന്ത്രംങ്ങൾ വികസിപ്പിച്ചു പ്രാവർ ത്തികമാകുന്നു | ഓരോസ്റ്റോറിനും ഓരോമാസവും മാർക്കറ്റിംഗിനായി ഒരുനിശ്ചിത തുകചെലവഴിക്കുന്നു.",

        "benifitsHeadFive": "പ്രൈവറ്റ്  ലേബലിംഗ്",
        "benifitPointFive": "നമ്മുടെ ബ്രാൻഡ് നാമത്തിൽ ഉൽപ്പന്നങ്ങൾ നിർമ്മിക്കുന്നു | അങ്ങനെ ഉൽപ്പനകളുടെ , ഗുണനിലവാരവും വിലയും ഞങ്ങൾ ഉറപ്പാക്കുന്നു | ഇത് നല്ല തരത്തിലുള്ള ബിസിനസ് കൊണ്ടുവരും.",

        "benifitsHeadSix": "ഉപഭോക്തൃ ബന്ധം",
        "benifitPointSix": "ഉൽപ്പന്നങ്ങൾ പ്രത്യേക വിലക്ക് വാങ്ങുന്നതിനാൽ ഉപഭോക്താവിന് വലിയ അളവിൽ ഇളവ് നൽകാൻ സാധിക്കുന്നു | ഉപഭോക്തൃ ലോയൽറ്റി പാക്കേജുകൾ | ഉപഭോക്തൃ ബന്ധ മാനേജുമെന്റ് സിസ്റ്റം.",
        // Benifits End

        //Why Start
        "whyTitle": "എന്തുകൊണ്ടാണ് നിങ്ങൾ chilla യുടെ ഭാഗമേകേണ്ടത്?",
        "whyDescription": "ബിസിനസ്സ് ലാഭമുണ്ടാക്കാനുള്ള ഒരു പ്രക്രിയ മാത്രമല്ല, അത് നിങ്ങളുടെ മേൽവിലാസം കൂടെ ആണ്. അത് നിങ്ങൾക്ക് തലവേദനയല്ല ഉണ്ടാകേണ്ടത്, ജീവിതത്തിന് മൂല്യം നൽകണം.\nകേരളത്തിലുടനീളം പ്രചരിക്കുന്ന ചില്ല കുടുംബത്തിലെ അംഗമാകൂ.\nനിങ്ങളുടെ ആശയം സംഭാവന ചെയ്യൂ!\nനമുക്ക് ഇത് ഒരുമിച്ച് ചെയ്യാം!!",
        //Why End

        //Requirements Start
        "requirementsTitle": "നിങ്ങൾക്കു വേണ്ടത്",
        "requirementsSubTitle": "ബാക്കി ഞങ്ങളുടെ ഉത്തവാദിത്തം!",

        "requirementsHeadOne": "പാർക്കിംഗ്",
        "requirementsPointOne": "കുറഞ്ഞത് 7+ കാർ പാർക്കിംഗ് എങ്കിലും ഉണ്ടായിരിക്കണം.",

        "requirementsHeadTwo": "സ്റ്റോർ കെട്ടിടം",
        "requirementsPointTwo": "കുറഞ്ഞത് 500 sgft വിസ്തീർണ്ണം ആവശ്യമാണ് | കെട്ടിടം പുതിയതോ നന്നായി പരിപാലിക്കുന്നതോ ആയിരിക്കണം.",

        "requirementsHeadThree": "സ്ഥാനം",
        "requirementsPointThree": "5 കിലോമീറ്റർ ചുറ്റളവിൽ കുറഞ്ഞത് 1500 വീടുകളെങ്കിലും ഉണ്ടായിരിക്കണം.",

        "requirementsHeadFoure": "നിക്ഷേപകന്റെ യോഗ്യത",
        "requirementsPointFoure": "ഒരു നിക്ഷേപകൻ എങ്കിലും ദൈനംദിന പ്രവർത്തനത്തിന്റെ ഭാഗമായിരിക്കണം | നിക്ഷേപകന്റെ പശ്ചാത്തലം ശുദ്ധവും മികച്ചതുമായിരിക്കണം.",
        //Requirements End


        // Financials Start
        "financialsTitle": "സാമ്പത്തികം",

        "investmentHead": "നിക്ഷേപം",
        "investmentPointOne": "25 ലക്ഷം പൂർണ്ണമായും റീഫണ്ട് ചെയ്യാവുന്ന നിക്ഷേപ തുകയാണ്, അത് നിങ്ങളുടെ ലൊക്കേഷൻ അനുസരിച്ച് വ്യത്യാസപ്പെടാം.",
        "investmentPointTwo": "ഫ്രാഞ്ചൈസ് ഫീസ് Rs 250,000.00 (+GST).",
        "investmentPointThree": "സ്റ്റോർ സജ്ജീകരിക്കുന്നതിനുള്ള യഥാർത്ഥ വില മാത്രമേ നിങ്ങൾ നൽകേണ്ടതുള്ളൂ. ",

        "expensesHead": "ചിലവുകള്‍",
        "expensesPointTwo": "എല്ലാ ചെലവുകളും ഞങ്ങളുടെ പരിധിയിൽ വരും.",
        "expensesPointThree": "​​മാർക്കറ്റിംഗ്, പർച്ചേസിംഗ്, ശമ്പളം, ഉപഭോക്തൃ ലോയൽറ്റി പ്രോഗ്രാമുകൾ, ഇലക്ട്രിസിറ്റി ബില്ലുകൾ, റിയൽ എസ്റ്റേറ്റ് വാടക, മറ്റ് എല്ലാ ചെലവുകളും കമ്പനി വഹിക്കും.",

        "roiHead": "നിക്ഷേപത്തിന്റെ വരുമാനം",
        "roiPointOne": "നിങ്ങളുടെ വിൽപ്പനയെ അടിസ്ഥാനമാക്കി എല്ലാ മാസാവസാനവും ഉറപ്പായും നിങ്ങൾക്ക് വരുമാനം ലഭിക്കും.",
        "roiPointTwo": "ഏറ്റവും കുറഞ്ഞ ഗ്യാരണ്ടീഡ് ROI ആണ് 7.02%, ഇത് 46.77% വരെ വിൽപ്പനയ്ക്ക് അനുസരിച്ച് വർദ്ധിക്കുന്നു.",
        // Financials End

        //Call or WhatApp Start
        "callHead":"ഈ അവസരം നഷ്‌ടപ്പെടുത്തരുത് !!",
        "callDescription": "ചില്ലയുടെ ഒരു ശാഖയാകാനുള്ള അവസരം!\nവിളിക്കു, WhatsApp ചെയ്യൂ ഇപ്പൊ കേരത്തിൽ നൽകുന്ന ചില്ലയുടെ ഒരു ഫ്രാഞ്ചൈസി നേടാൻ!!!",
        //Call or WhatApp End

    }
}