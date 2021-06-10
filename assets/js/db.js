


const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');


const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');


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

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;


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

        whyTitleEl.textContent = data[attr].whyTitle;
        whyDescriptionEl.textContent = data[attr].whyDescription;


    });
});



var data = {
    "english":
    {
        "title": "Are you now thinking of a guaranteed monthly income without  any headaches?",

        "titleTwo": "",

        "description": "Everyone knows that supermarkets are a highly profitable business in any crisis situation and its operations are always very difficult.We do all these difficult operations for you. We make good and right choices in every aspect of the business that will bring assured profit to you.We have acquired this art through experience and regular updates over 35 years. \nDo you want a regular monthly income without knowing any hassle or difficulty of this business? \nBe a part of the prestigious Chilla Supermarket Chains!\nThe rest is our guarantee!",

        // Benifits start
        "benifitsTitle": "Benefit of Chilla",

        "benifitsHeadOne": "SOP In Whole Area",
        "benifitPointOneOne": "We retain the Standard Of Procedures in every area | We build and furnish the store.",

        "benifitsHeadTwo": "Team Management",
        "benifitPointTwo": "We recruit and place the teams as your business requires | We train each team member on customer behavior, sales, products, billing, merchandising, etc/ | To increase the sales, we assign targets and commissions to the team.",

        "benifitsHeadThree": "Inventory Management",
        "benifitPointThree": "Chilla buys and delivers only the required stocks of each store | Pricing is based on your market | We purchase goods from companies with special prices.",

        "benifitsHeadFoure": "Marketing",
        "benifitPointFoure": "We study your market regularly | We spend a certain amount on marketing for each store every month | We develop and implement strategies tailored to your location to achieve sales goals.",


        "benifitsHeadFive": "Private Labeling",
        "benifitPointFive": "Manufactures products under our brand name | In this way we ensure quality and price",

        "benifitsHeadSix": "Customer Relationship",
        "benifitPointSix": "Our purchasing system gives large amounts of discount to the customer | Customer loyalty packages | Customer Relationship Management System.",
        // Benifits End

        //Why Start
        "whyTitle": "Why do you want to be a part of Chilla?",
        "whyDescription": "Business is not just a process to make profit, it is your recognition. It should not be a headache for you, it should give value to life. \nBe a member of the Chilla family that is spreading across Kerala. \nContribute your idea! \nLet's do it together!!",
        //Why End

        //Requirements Start
        "requirementsTitle": "Requirements",
        "requirementsSubTitle": "The rest is our responsibility!",

        "requirementsHeadOne": "Parking",
        "requirementsPointOne": "here should be at least 7+ car parking",

        "requirementsHeadTwo": "Store Premises",
        "requirementsPointTwo": "Minimum sales floor should require 500 sq ft | Building must be new or well maintained",

        "requirementsHeadThree": "Location",
        "requirementsPointThree": "There should be at least 1500 households within a radius of 5 km",

        "requirementsHeadFoure": "Investor Eligibility",
        "requirementsPointFoure": "An investor should be part of the day-to-day activity | The background of the investor should be clean and good",
        //Requirements End

        // Meet Our Team Start
        "teamTitle": "Meet Our Team",
        // Meet Our Team End

        // Financials Start
        "financialsTitle": "Financials",

        "investmentHead": "Investment",
        "investmentAmount": "2,500,000.00/-",
        "investmentPointOnt": "This is the minimum investment required",
        "investmentPointTwo": "You only need to pay the actual cost of setting up the store",
        "investmentPointThree": "",

        "returenHead": "Returns",
        "returenAmount": "5%",
        "returenPointOnt": "You will definitely get a flat return of 5% of the sales in your store every month.",
        "returenPointTwo": "All other expenses are covered under our purview.",
        "returenPointThree": "Marketing, Purchasing, Salaries, Customer loyalty programs, Electricity bill etc/..",

        "roiHead": "Return on Investment",
        "roiAmount": "30%",
        "roiPointOnt": "The minimum expected ROI is 30%.",
        "roiPointTwo": "30% is a great return compared to any other industries",
        "roiPointThree": "",
        // Financials End

        //Call or WhatApp Start
        "callHead": "Don't miss this opportunity!",
        "callDescription": "Opportunity to be a branch of Chilla!.Call or WhatsApp to become a prestigious Chilla franchisee in your area now!",
        //Call or WhatApp End



    },
    //Malayalam Starts Here
    "malayalam":
    {
        "title": "തലവേദനകൾ ഇല്ലാതെ ഉറപ്പുള്ള ഒരു മാസാവരുമാനം ആണോ ഇപ്പോൾ നിങ്ങൾ ചിന്തിക്കുന്നത് ?",
        "description": "എല്ലാവർക്കും അറിയാം ഏത് പ്രീതിസന്ധി സാഹചര്യത്തിലും സൂപ്പർമാർക്കറ്റ് വളരെ ലാഭകരമായ ബിസിനസ്സാണെന്നും  എന്നാൽ അതിന്റെ പ്രവർത്തനം എല്ലായ്‌പോഴും  വളരെ പ്രയാസകരമാണെന്നും.നിങ്ങൾക്കായി ഈ പ്രയാസകരമായ എല്ലാ പ്രവർത്തനങ്ങളും ഞങ്ങൾ‌ ചെയ്യുന്നു. ബിസിനസിന്റെ എല്ലാ കാര്യങ്ങളിലും എല്ലാ ഭാഗങ്ങളിലും ഞങ്ങൾ ഉചിതവും  കൃത്യവുംമായ  തിരഞ്ഞെടുപ്പുകൾ നടത്തുന്നു, ഇത്  നിങ്ങൾക്ക്  ലാഭം ഉറപ്പാകുന്നു.ഇ ബിസിനെസ്സിൽ 30 വര്ഷമായിട്ടുള്ള ഞങ്ങളുടെ അനുഭവങ്ങളിലൂടെയും പതിവായ അപ്‌ഡേറ്റുകളിലൂടെയും ആണ് ഞങ്ങൾ ഈ കല സ്വന്തമാക്കിയത്.\nഈ ബിസിനസ്സിന്റെ ഒരു ബുദ്ധിമുട്ടും ഒരു പ്രയാസവും  അറിയാതെ നിങ്ങൾക്ക് എല്ലാ മാസവും വരുമാനം വേണ്ടേ? \nഎങ്കിൽ അഭിമാനകരമായ Chilla സൂപരമാർക്കറ്റ് ശൃംഖലകളുടെ ഭാഗമാകൂ!.\nബാക്കി ഞങ്ങളുടെ ഉറപ്പ് !",


        // Benifits start
        "benifitsTitle": "chilla യുടെ പ്രയോജനങ്ങൾ",

        "benifitsHeadOne": "മുഴുവൻ കാര്യങ്ങളിലും sop",
        "benifitPointOneOne": "എല്ലാ സ്റ്റോറിലെയും എല്ലാ മേഖലയിലും ഒരേ സ്റ്റാൻഡേർഡ് നടപടിക്രമങ്ങൾ നിലനിർത്തുന്നു | ഞങ്ങൾ സ്റ്റോർ നിർമ്മിക്കുകയും സജ്ജമാക്കുകയും ചെയ്യുന്നു",


        "benifitsHeadTwo": "ടീം മാനേജുമെന്റ്",
        "benifitPointTwo": "നിങ്ങളുടെ സ്റ്റോറിന് ആവശ്യാനുസരണം ടീമിനെ നിയമിക്കുന്നു | ഉപഭോക്തൃ പെരുമാറ്റം, വിൽ‌പന, ഉൽ‌പ്പന്നങ്ങൾ‌, ബില്ലിംഗ്, മർച്ചൻഡൈസിംഗ് മുതലായവയിൽ‌ ഓരോ ടീം അംഗങ്ങളെയും  പരിശീലിപ്പിക്കുന്നു | വിൽ‌പന വർദ്ധിപ്പിക്കുന്നതിന്, നമ്മൾ  ടീമിന് ടാർ‌ഗെറ്റുകളും കമ്മീഷനുകളും നൽകുന്നു",


        "benifitsHeadThree": "സ്റ്റോക്ക് എന്ന തലവേദന നിങ്ങൾ അറിയുന്നില്ല",
        "benifitPointThree": "ഓരോ സ്റ്റോറിന്റെയും ആവശ്യമായ സ്റ്റോക്ക്കൾ മാത്രം chilla വാങ്ങി എത്തിച്ചു തരുന്നു | നിങ്ങളുടെ മാർക്കറ്റ് അനുസരിച്ച്‌ വില നിർണ്ണയം നടത്തുന്നു | കമ്പനികളുമായി നേരിട്ട് സംസാരിച്ചു പ്രതേക വിലക്ക് ചരക്കുകൾ വാങ്ങിക്കുന്നു",


        "benifitsHeadFoure": "മാർക്കറ്റിംഗ്",
        "benifitPointFoure": "ഞങ്ങൾ നിങ്ങളുടെ മാർക്കറ്റിനെ കുറിച്ച്  പതിവായി പഠിക്കുന്നു | ഓരോ സ്റ്റോറിനും ഓരോ മാസവും മാർക്കറ്റിംഗിനായി chilla  ഒരു നിശ്ചിത തുക ചെലവഴിക്കുന്നു | വിൽപ്പന ടാർഗറ്റ്  നേടാൻ, നിങ്ങളുടെ ലൊക്കേഷന് അനുയോജ്യമായ തന്ത്രംങ്ങൾ  വികസിപ്പിച്ചു പ്രാവർത്തികമാകുന്നു",

        "benifitsHeadFive": "പ്രൈവറ്റ്  ലേബലിംഗ്",
        "benifitPointFive": "നമ്മുടെ ബ്രാൻഡ് നാമത്തിൽ ഉൽപ്പന്നങ്ങൾ നിർമ്മിക്കുന്നു | അങ്ങനെ ഉൽപ്പനകളുടെ , ഗുണനിലവാരവും വിലയും ഞങ്ങൾ ഉറപ്പാക്കുന്നു | ഇത് നല്ല തരത്തിലുള്ള ബിസിനസ് കൊണ്ടുവരും",

        "benifitsHeadSix": "ഉപഭോക്തൃ ബന്ധം",
        "benifitPointSix": "ഉൽപ്പന്നങ്ങൾ പ്രത്യേക വിലക്ക് വാങ്ങുന്നതിനാൽ ഉപഭോക്താവിന് വലിയ അളവിൽ ഇളവ് നൽകാൻ സാധിക്കുന്നു | ഉപഭോക്തൃ ലോയൽറ്റി പാക്കേജുകൾ | ഉപഭോക്തൃ ബന്ധ മാനേജുമെന്റ് സിസ്റ്റം",
        // Benifits End

        //Why Start
        "whyTitle": "എന്തുകൊണ്ടാണ് നിങ്ങൾ chilla യുടെ ഭാഗമേകേണ്ടത്?",
        "whyDescription": "ബിസിനസ്സ് ലാഭമുണ്ടാക്കാനുള്ള ഒരു പ്രക്രിയ മാത്രമല്ല, അത് നിങ്ങളുടെ മേൽവിലാസം കൂടെ ആണ്. അത് നിങ്ങൾക്ക് തലവേദനയല്ല ഉണ്ടാകേണ്ടത്, ജീവിതത്തിന് മൂല്യം നൽകണം.\nകേരളത്തിലുടനീളം പ്രചരിക്കുന്ന ചില്ല കുടുംബത്തിലെ അംഗമാകൂ.\nനിങ്ങളുടെ ആശയം സംഭാവന ചെയ്യൂ!\nനമുക്ക് ഇത് ഒരുമിച്ച് ചെയ്യാം!!",
        //Why End

        //Requirements Start
        "requirementsTitle": "നിങ്ങൾക്കു വേണ്ടത്",
        "requirementsSubTitle": "ബാക്കി ഞങ്ങളുടെ ഉത്തവാദിത്തം!",

        "requirementsHeadOne": "പാർക്കിംഗ്",
        "requirementsPointOne": "കുറഞ്ഞത് 7+ കാർ പാർക്കിംഗ് എങ്കിലും ഉണ്ടായിരിക്കണം",

        "requirementsHeadTwo": "സ്റ്റോർ കെട്ടിടം",
        "requirementsPointTwo": "കുറഞ്ഞത് 500 sgft വിസ്തീർണ്ണം ആവശ്യമാണ് | കെട്ടിടം പുതിയതോ നന്നായി പരിപാലിക്കുന്നതോ ആയിരിക്കണം",

        "requirementsHeadThree": "സ്ഥാനം",
        "requirementsPointThree": "5 കിലോമീറ്റർ ചുറ്റളവിൽ കുറഞ്ഞത് 1500 വീടുകളെങ്കിലും ഉണ്ടായിരിക്കണം",

        "requirementsHeadFoure": "നിക്ഷേപകന്റെ യോഗ്യത",
        "requirementsPointFoure": "ഒരു നിക്ഷേപകൻ എങ്കിലും ദൈനംദിന പ്രവർത്തനത്തിന്റെ ഭാഗമായിരിക്കണം | നിക്ഷേപകന്റെ പശ്ചാത്തലം ശുദ്ധവും മികച്ചതുമായിരിക്കണം",
        //Requirements End

        // Meet Our Team Start
        "teamTitle": "Meet Our Team",
        // Meet Our Team End

        // Financials Start
        "financialsTitle": "Financials",

        "investmentHead": "Investment",
        "investmentAmount": "2,500,000.00/-",
        "investmentPointOnt": "This is the minimum investment required",
        "investmentPointTwo": "You only need to pay the actual cost of setting up the store",
        "investmentPointThree": "",

        "returenHead": "Returns",
        "returenAmount": "5%",
        "returenPointOnt": "You will definitely get a flat return of 5% of the sales in your store every month.",
        "returenPointTwo": "All other expenses are covered under our purview.",
        "returenPointThree": "Marketing, Purchasing, Salaries, Customer loyalty programs, Electricity bill etc/..",

        "roiHead": "Return on Investment",
        "roiAmount": "30%",
        "roiPointOnt": "The minimum expected ROI is 30%.",
        "roiPointTwo": "30% is a great return compared to any other industries",
        "roiPointThree": "",
        // Financials End

        //Call or WhatApp Start
        "callHead": "Don't miss this opportunity!",
        "callDescription": "Opportunity to be a branch of Chilla!.Call or WhatsApp to become a prestigious Chilla franchisee in your area now!",
        //Call or WhatApp End

    }
}