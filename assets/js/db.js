


const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');
const benifitsTitleEl = document.querySelector('.benifitsTitleEl');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        benifitsTitleEl.textContent = data[attr].benifitsTitle;

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
        "benifitPointOneOne": "We retain the Standard Of Procedures in every area.",
        "benifitPointOneTwo": "We build and furnish the store.",
        "benifitPointOneThree": "",

        "benifitsHeadTwo": "Team Management Handled by Chilla",
        "benifitPointTwoOne": "We recruit and place the teams as your business requires.",
        "benifitPointTwoTwo": "We train each team member on customer behavior, sales, products, billing, merchandising, etc/.",
        "benifitPointTwoThree": "To increase the sales, we assign targets and commissions to the team.",

        "benifitsHeadThree": "Inventory Management System",
        "benifitPointThreeOne": " Chilla buys and delivers only the required stocks of each store.",
        "benifitPointThreeTwo": "Pricing is based on your market.",
        "benifitPointThreeThree": "We purchase goods from companies with special prices.",

        "benifitsHeadFoure": "Marketing",
        "benifitPointFoureOne": "We study your market regularly.",
        "benifitPointFoureTwo": "We spend a certain amount on marketing for each store every month",
        "benifitPointFoureThree": "We develop and implement strategies tailored to your location to achieve sales goals.",

        "benifitsHeadFive": "Private Labeling ",
        "benifitPointFiveOne": "Manufactures products under our brand name.",
        "benifitPointFiveTwo": "In this way we ensure quality and price.",
        "benifitPointFiveThree": "",

        "benifitsHeadSix": "Customer Relationship",
        "benifitPointSixOne": "Our purchasing system gives large amounts of discount to the customer.",
        "benifitPointSixTwo": "Customer loyalty packages.",
        "benifitPointSixThree": "Customer Relationship Management System.",
        // Benifits End

        //Why Start
        "whyTitle": "Why do you want to be a part of Chilla?",
        "whyDescription": "Business is not just a process to make profit, it is your recognition. It should not be a headache for you, it should give value to life. Be a member of the Chilla family that is spreading across Kerala. Contribute your idea, Let's do it together.",
        //Why End

        //Requirements Start
        "requirementsTitle": "Requirements",
        "requirementsSubTitle": "The rest is our responsibility!",

        "requirementsHeadOne": "Store Premisses",
        "requirementsPointOne": "Minimum sales floor should require 500 sq ft.Building must be new or well maintained",

        "requirementsHeadTwo": "Parking",
        "requirementsPointTwo": "There should be at least 7+ car parking.",

        "requirementsHeadThree": "Investor Eligibility",
        "requirementsPointThree": "An investor should be part of the day-to-day activity.The background of the investor should be clean and good.",

        "requirementsHeadFoure": "Location",
        "requirementsPointFoure": "There should be at least 1500 households within a radius of 5 km.",
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
    "malayalam":
    {
        "title": "തലവേദനകൾ ഇല്ലാതെ ഉറപ്പുള്ള ഒരു മാസാവരുമാനം ആണോ ഇപ്പോൾ നിങ്ങൾ ചിന്തിക്കുന്നത് ?",
        "description": "എല്ലാവർക്കും അറിയാം ഏത് പ്രീതിസന്ധി സാഹചര്യത്തിലും സൂപ്പർമാർക്കറ്റ് വളരെ ലാഭകരമായ ബിസിനസ്സാണെന്നും  എന്നാൽ അതിന്റെ പ്രവർത്തനം എല്ലായ്‌പോഴും  വളരെ പ്രയാസകരമാണെന്നും.നിങ്ങൾക്കായി ഈ പ്രയാസകരമായ എല്ലാ പ്രവർത്തനങ്ങളും ഞങ്ങൾ‌ ചെയ്യുന്നു. ബിസിനസിന്റെ എല്ലാ കാര്യങ്ങളിലും എല്ലാ ഭാഗങ്ങളിലും ഞങ്ങൾ ഉചിതവും  കൃത്യവുംമായ  തിരഞ്ഞെടുപ്പുകൾ നടത്തുന്നു, ഇത്  നിങ്ങൾക്ക്  ലാഭം ഉറപ്പാകുന്നു.ഇ ബിസിനെസ്സിൽ 30 വര്ഷമായിട്ടുള്ള ഞങ്ങളുടെ അനുഭവങ്ങളിലൂടെയും പതിവായ അപ്‌ഡേറ്റുകളിലൂടെയും ആണ് ഞങ്ങൾ ഈ കല സ്വന്തമാക്കിയത്.\nഈ ബിസിനസ്സിന്റെ ഒരു ബുദ്ധിമുട്ടും ഒരു പ്രയാസവും  അറിയാതെ നിങ്ങൾക്ക് എല്ലാ മാസവും വരുമാനം വേണ്ടേ? \nഎങ്കിൽ അഭിമാനകരമായ Chilla സൂപരമാർക്കറ്റ് ശൃംഖലകളുടെ ഭാഗമാകൂ!.\nബാക്കി ഞങ്ങളുടെ ഉറപ്പ് !",


        // Benifits start
        "benifitsTitle": "chilla യുടെ പ്രയോജനങ്ങൾ",

        "benifitsHeadOne": "മുഴുവൻ കാര്യങ്ങളിലും sop.",
        "benifitPointOneOne": "എല്ലാ സ്റ്റോറിലെയും എല്ലാ മേഖലയിലും ഒരേ സ്റ്റാൻഡേർഡ് നടപടിക്രമങ്ങൾ നിലനിർത്തുന്നു.",
        "benifitPointOneTwo": "ഞങ്ങൾ സ്റ്റോർ നിർമ്മിക്കുകയും സജ്ജമാക്കുകയും ചെയ്യുന്നു.",
        "benifitPointOneThree": "",

        "benifitsHeadTwo": "Team Management Handled by Chilla",
        "benifitPointTwoOne": "We recruit and place the teams as your business requires.",
        "benifitPointTwoTwo": "We train each team member on customer behavior, sales, products, billing, merchandising, etc/.",
        "benifitPointTwoThree": "To increase the sales, we assign targets and commissions to the team.",

        "benifitsHeadThree": "Inventory Management System",
        "benifitPointThreeOne": " Chilla buys and delivers only the required stocks of each store.",
        "benifitPointThreeTwo": "Pricing is based on your market.",
        "benifitPointThreeThree": "We purchase goods from companies with special prices.",

        "benifitsHeadFoure": "Marketing",
        "benifitPointFoureOne": "We study your market regularly.",
        "benifitPointFoureTwo": "We spend a certain amount on marketing for each store every month",
        "benifitPointFoureThree": "We develop and implement strategies tailored to your location to achieve sales goals.",

        "benifitsHeadFive": "Private Labeling ",
        "benifitPointFiveOne": "Manufactures products under our brand name.",
        "benifitPointFiveTwo": "In this way we ensure quality and price.",
        "benifitPointFiveThree": "",

        "benifitsHeadSix": "Customer Relationship",
        "benifitPointSixOne": "Our purchasing system gives large amounts of discount to the customer.",
        "benifitPointSixTwo": "Customer loyalty packages.",
        "benifitPointSixThree": "Customer Relationship Management System.",
        // Benifits End

        //Why Start
        "whyTitle": "Why do you want to be a part of Chilla?",
        "whyDescription": "Business is not just a process to make profit, it is your recognition. It should not be a headache for you, it should give value to life. Be a member of the Chilla family that is spreading across Kerala. Contribute your idea, Let's do it together.",
        //Why End

        //Requirements Start
        "requirementsTitle": "Requirements",
        "requirementsSubTitle": "The rest is our responsibility!",

        "requirementsHeadOne": "Store Premisses",
        "requirementsPointOne": "Minimum sales floor should require 500 sq ft.Building must be new or well maintained",

        "requirementsHeadTwo": "Parking",
        "requirementsPointTwo": "There should be at least 7+ car parking.",

        "requirementsHeadThree": "Investor Eligibility",
        "requirementsPointThree": "An investor should be part of the day-to-day activity.The background of the investor should be clean and good.",

        "requirementsHeadFoure": "Location",
        "requirementsPointFoure": "There should be at least 1500 households within a radius of 5 km.",
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