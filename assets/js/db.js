

    
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
    });
});

 

var data = {
    "english":
    {
        "title": "Opportunity to be a Chilla branch",

        "titleTwo": "We are now offering our franchisees in Kerala",

        "description": "Everyone knows that the supermarket is a highly profitable business in any pandemic situation and its operations are always very difficult.We do all these difficult operations for you. We make good and right choices in every aspect of the business that will bring assured profit to you.We have acquired this art through experience and regular updates over 35 years; this gives us confidence.Do you want a regular monthly income without knowing any hassle or difficulty of this business, be a part of the prestigious Chilla Supermarket Chains!The rest is our guarantee!",

        "titleBenifits": "BENEFITS OF CHILLA RETAIL FRANCHISEE",

        "benifitsHeadOne": "SOP In Whole Area",
        "benifitPointOne": "We retain the Standard Of Procedures in every area.We build and furnish the store.",

        "benifitsHeadTwo": "Team Management",
        "benifitPointTwo": "We recruit and place the team as your store requires.We train the team in customer behaviour, sales, products, billing, merchandising, etc/.To increase the sales, we assign targets and commissions to the team",

        "benifitsHeadThree": "Stock Management System",
        "benifitPointThree": "We purchase stock. Replenishing stock as and when required. Pricing Stock. We purchase goods from companies with special prices",

        "benifitsHeadFoure": "Marketing",
        "benifitPointFoure": "We study your market regularly.We spend a certain amount on marketing for each store every month. To achieve our sales target, we develop a suitable strategy for your location",

        "benifitsHeadFive": "Private Labeling ",
        "benifitPointFive": "We produce products under our brand name. In this way, we ensure quality and price",
        
        "benifitsHeadSix": "Customer Relationship",
        "benifitPointSix": "Our purchasing system gives the customer large amounts of discount. Customer loyalty packages. Customer relationship management system",


        "whyHead":"",
        "whyDescription":"",




    },
    "malayalam": 
			  {
			    "title": "Сәлем Әлем",
			    "description":"എല്ലാവർക്കും അറിയാം ഏത് മഹാമാരി സാഹചര്യത്തിലും സൂപ്പർമാർക്കറ്റ് വളരെ ലാഭകരമായ ബിസിനസ്സാണെന്നും  എന്നാൽ അതിന്റെ കൃത്യനിർവ്വഹണം എല്ലായ്‌പോഴും  വളരെ പ്രയാസകരമാണെന്നും.നിങ്ങൾക്കായി ഈ പ്രയാസകരമായ എല്ലാ കൃത്യനിർവ്വഹണങ്ങളും  ഞങ്ങൾ‌ ചെയ്യുന്നു. ബിസിനസിന്റെ എല്ലാ കാര്യങ്ങളിലും എല്ലാ ഭാഗങ്ങളിലും ഞങ്ങൾ നല്ലതും കൃത്യവുംമായ  തിരഞ്ഞെടുപ്പുകൾ നടത്തുന്നു, ഇത്  നിങ്ങൾക്ക്  ലാഭം ഉറപ്പു വരുത്തുന്നു.ഇ ബിസിനെസ്സിൽ 35 വര്ഷമായിട്ടുള്ള ഞങ്ങളുടെ അനുഭവങ്ങളിലൂടെയും പതിവായ അപ്‌ഡേറ്റുകളിലൂടെയും ആണ് നങ്ങൾ ഈ കല സ്വന്തമാക്കിയത്, അതാണ് ഞങ്ങൾക്കു ഈ  ദൃഢവിശ്വാസം തന്നത്.ഇ ബിസിനസ്സിന്റെ ഒരു ബുദ്ധിമുട്ടും ഒരു പ്രയാസവും  അറിയാതെ നിങ്ങൾക്ക് എല്ലാ മാസവും വരുമാനം വേണ്ടേ? എങ്കിൽ അഭിമാനകരമായ Chilla സൂപ്പർമാർകെറ്റ് ശൃംഖലകളുടെ ഭാഗമാകൂ !.ബാക്കി ഞങ്ങളുടെ ഉറപ്പ് !"
			  }
}