/**
 * 記事本文の registry。
 * 新しい記事を追加するときは、ここに import して articleBodies に追加する。
 *
 * 各記事ファイルは下記のパターンを守る:
 *
 *   export const article = {
 *     title: "...",
 *     content: `... markdown ...`,
 *   };
 */

import { article as cebuFamilyStudyCost2026 } from "./cebu-family-study-cost-2026";
import { article as cebuLivingCost3Patterns } from "./cebu-living-cost-3-patterns";
import { article as itParkCoworkingCompare } from "./it-park-coworking-compare";
import { article as cebuRealEstate2026 } from "./cebu-real-estate-2026";
import { article as familyAreaCompare } from "./family-area-compare";
import { article as cebuSrrvVsLongStayVisa } from "./cebu-srrv-vs-long-stay-visa";
import { article as cebuCondoVsRental } from "./cebu-condo-vs-rental";
import { article as oneWeekCebuStudyRealistic } from "./1-week-cebu-study-realistic";
import { article as shortTermSummer2Weeks } from "./short-term-summer-2-weeks";
import { article as shortTermPackingEssentials } from "./short-term-packing-essentials";
import { article as cebuHousingContractChecklist } from "./cebu-housing-contract-checklist";
import { article as cebuFamilyHousingAreas } from "./cebu-family-housing-areas";
import { article as cebuHospitalComparison2026 } from "./cebu-hospital-comparison-2026";
import { article as cebuInsuranceShortVsLong } from "./cebu-insurance-short-vs-long";
import { article as cebuPediatricCareGuide } from "./cebu-pediatric-care-guide";
import { article as cebuSafetyByArea2026 } from "./cebu-safety-by-area-2026";
import { article as cebuSafetyNightRules } from "./cebu-safety-night-rules";
import { article as cebuGrabVsTaxi } from "./cebu-grab-vs-taxi";
import { article as cebuInternationalSchools3 } from "./cebu-international-schools-3";
import { article as cebuJapaneseSupplementarySchool } from "./cebu-japanese-supplementary-school";
import { article as cebuEducationCostYearly } from "./cebu-education-cost-yearly";
import { article as remoteWorkCebuVisa2026 } from "./remote-work-cebu-visa-2026";
import { article as remoteInternetRedundancy } from "./remote-internet-redundancy";
import { article as remoteTaxAndInsurance } from "./remote-tax-and-insurance";
import { article as localJob9gVisaProcess } from "./local-job-9g-visa-process";
import { article as localJobSalaryMarket } from "./local-job-salary-market";
import { article as localJobJobstreetTips } from "./local-job-jobstreet-tips";
import { article as cebuStartupIncorporationFlow } from "./cebu-startup-incorporation-flow";
import { article as cebuStartupEntityType } from "./cebu-startup-entity-type";
import { article as cebuStartupNegativeList2026 } from "./cebu-startup-negative-list-2026";
import { article as bpoFromScratchCebu } from "./bpo-from-scratch-cebu";
import { article as bpoSalaryAndBenefits } from "./bpo-salary-and-benefits";
import { article as bpoCulturalManagement } from "./bpo-cultural-management";
import { article as educationInvestRoi } from "./education-invest-roi";
import { article as educationInvestStages } from "./education-invest-stages";
import { article as educationInvestBudget } from "./education-invest-budget";
import { article as englishInvestRoiCareer } from "./english-invest-roi-career";
import { article as englishInvest3monthPlan } from "./english-invest-3month-plan";
import { article as familyFutureStepByStep } from "./family-future-step-by-step";
import { article as familyFutureDualCareer } from "./family-future-dual-career";
import { article as longStaySrrv2026 } from "./long-stay-srrv-2026";
import { article as longStayTwoBaseLife } from "./long-stay-two-base-life";
import { article as longStayCondoOrRental } from "./long-stay-condo-or-rental";
import { article as businessInvestTestToScale } from "./business-invest-test-to-scale";
import { article as businessInvestForeignEquity } from "./business-invest-foreign-equity";
import { article as businessInvestExitStrategy } from "./business-invest-exit-strategy";
import { article as cebuCityLivingCostMonthly } from "./cebu-city-living-cost-monthly";
import { article as cebuCityCondoAreasCompare } from "./cebu-city-condo-areas-compare";
import { article as cebuCityGettingAround } from "./cebu-city-getting-around";
import { article as itParkCondoDetailedCompare } from "./it-park-condo-detailed-compare";
import { article as itParkWorkOptionsJp } from "./it-park-work-options-jp";
import { article as itParkRemoteWorkerDay } from "./it-park-remote-worker-day";
import { article as businessParkFamilyHousing } from "./business-park-family-housing";
import { article as businessParkExpatLife } from "./business-park-expat-life";
import { article as businessParkSmallOfficeStartup } from "./business-park-small-office-startup";
import { article as lahugEnglishSchoolsMapping } from "./lahug-english-schools-mapping";
import { article as lahugFamilyStudyLife } from "./lahug-family-study-life";
import { article as lahugHousingRentReport } from "./lahug-housing-rent-report";
import { article as baniladInternationalSchoolMap } from "./banilad-international-school-map";
import { article as baniladShoppingMallsCompare } from "./banilad-shopping-malls-compare";
import { article as baniladFamilyLifestyle } from "./banilad-family-lifestyle";
import { article as maboloAccessToMainAreas } from "./mabolo-access-to-main-areas";
import { article as maboloJapaneseFamilyHousing } from "./mabolo-japanese-family-housing";
import { article as maboloDailyLife } from "./mabolo-daily-life";
import { article as mandaueCostFocusedLife } from "./mandaue-cost-focused-life";
import { article as mandaueBaseForBusiness } from "./mandaue-base-for-business";
import { article as mandaueFamilyCommute } from "./mandaue-family-commute";
import { article as mactanResortLivingReality } from "./mactan-resort-living-reality";
import { article as mactanEnglishSchoolsFamily } from "./mactan-english-schools-family";
import { article as cebuSchoolsGeniusEnglish } from "./cebu-schools-genius-english";
import { article as moalboalWeekendTrip } from "./moalboal-weekend-trip";
import { article as moalboalNomadStay } from "./moalboal-nomad-stay";
import { article as moalboalFromCebuAccess } from "./moalboal-from-cebu-access";
import { article as oslobWhalesharkGuide } from "./oslob-whaleshark-guide";
import { article as oslobDayTripPlan } from "./oslob-day-trip-plan";
import { article as oslobStayOvernight } from "./oslob-stay-overnight";
import { article as bantayanWeekendGetaway } from "./bantayan-weekend-getaway";
import { article as bantayanAccessStay } from "./bantayan-access-stay";
import { article as bantayanLongStayFeasibility } from "./bantayan-long-stay-feasibility";
import { article as remoteWorkAndStudy } from "./remote-work-and-study";
import { article as toeic100Up1month } from "./toeic-100-up-1month";
import { article as familyStudyWhereToStay } from "./family-study-where-to-stay";

export type ArticleBody = {
  title: string;
  content: string;
};

const articleBodies: Record<string, ArticleBody> = {
  "cebu-family-study-cost-2026": cebuFamilyStudyCost2026,
  "cebu-living-cost-3-patterns": cebuLivingCost3Patterns,
  "it-park-coworking-compare": itParkCoworkingCompare,
  "cebu-real-estate-2026": cebuRealEstate2026,
  "family-area-compare": familyAreaCompare,
  "cebu-srrv-vs-long-stay-visa": cebuSrrvVsLongStayVisa,
  "cebu-condo-vs-rental": cebuCondoVsRental,
  "1-week-cebu-study-realistic": oneWeekCebuStudyRealistic,
  "short-term-summer-2-weeks": shortTermSummer2Weeks,
  "short-term-packing-essentials": shortTermPackingEssentials,
  "cebu-housing-contract-checklist": cebuHousingContractChecklist,
  "cebu-family-housing-areas": cebuFamilyHousingAreas,
  "cebu-hospital-comparison-2026": cebuHospitalComparison2026,
  "cebu-insurance-short-vs-long": cebuInsuranceShortVsLong,
  "cebu-pediatric-care-guide": cebuPediatricCareGuide,
  "cebu-safety-by-area-2026": cebuSafetyByArea2026,
  "cebu-safety-night-rules": cebuSafetyNightRules,
  "cebu-grab-vs-taxi": cebuGrabVsTaxi,
  "cebu-international-schools-3": cebuInternationalSchools3,
  "cebu-japanese-supplementary-school": cebuJapaneseSupplementarySchool,
  "cebu-education-cost-yearly": cebuEducationCostYearly,
  "remote-work-cebu-visa-2026": remoteWorkCebuVisa2026,
  "remote-internet-redundancy": remoteInternetRedundancy,
  "remote-tax-and-insurance": remoteTaxAndInsurance,
  "local-job-9g-visa-process": localJob9gVisaProcess,
  "local-job-salary-market": localJobSalaryMarket,
  "local-job-jobstreet-tips": localJobJobstreetTips,
  "cebu-startup-incorporation-flow": cebuStartupIncorporationFlow,
  "cebu-startup-entity-type": cebuStartupEntityType,
  "cebu-startup-negative-list-2026": cebuStartupNegativeList2026,
  "bpo-from-scratch-cebu": bpoFromScratchCebu,
  "bpo-salary-and-benefits": bpoSalaryAndBenefits,
  "bpo-cultural-management": bpoCulturalManagement,
  "education-invest-roi": educationInvestRoi,
  "education-invest-stages": educationInvestStages,
  "education-invest-budget": educationInvestBudget,
  "english-invest-roi-career": englishInvestRoiCareer,
  "english-invest-3month-plan": englishInvest3monthPlan,
  "family-future-step-by-step": familyFutureStepByStep,
  "family-future-dual-career": familyFutureDualCareer,
  "long-stay-srrv-2026": longStaySrrv2026,
  "long-stay-two-base-life": longStayTwoBaseLife,
  "long-stay-condo-or-rental": longStayCondoOrRental,
  "business-invest-test-to-scale": businessInvestTestToScale,
  "business-invest-foreign-equity": businessInvestForeignEquity,
  "business-invest-exit-strategy": businessInvestExitStrategy,
  "cebu-city-living-cost-monthly": cebuCityLivingCostMonthly,
  "cebu-city-condo-areas-compare": cebuCityCondoAreasCompare,
  "cebu-city-getting-around": cebuCityGettingAround,
  "it-park-condo-detailed-compare": itParkCondoDetailedCompare,
  "it-park-work-options-jp": itParkWorkOptionsJp,
  "it-park-remote-worker-day": itParkRemoteWorkerDay,
  "business-park-family-housing": businessParkFamilyHousing,
  "business-park-expat-life": businessParkExpatLife,
  "business-park-small-office-startup": businessParkSmallOfficeStartup,
  "lahug-english-schools-mapping": lahugEnglishSchoolsMapping,
  "lahug-family-study-life": lahugFamilyStudyLife,
  "lahug-housing-rent-report": lahugHousingRentReport,
  "banilad-international-school-map": baniladInternationalSchoolMap,
  "banilad-shopping-malls-compare": baniladShoppingMallsCompare,
  "banilad-family-lifestyle": baniladFamilyLifestyle,
  "mabolo-access-to-main-areas": maboloAccessToMainAreas,
  "mabolo-japanese-family-housing": maboloJapaneseFamilyHousing,
  "mabolo-daily-life": maboloDailyLife,
  "mandaue-cost-focused-life": mandaueCostFocusedLife,
  "mandaue-base-for-business": mandaueBaseForBusiness,
  "mandaue-family-commute": mandaueFamilyCommute,
  "mactan-resort-living-reality": mactanResortLivingReality,
  "mactan-english-schools-family": mactanEnglishSchoolsFamily,
  "cebu-schools-genius-english": cebuSchoolsGeniusEnglish,
  "moalboal-weekend-trip": moalboalWeekendTrip,
  "moalboal-nomad-stay": moalboalNomadStay,
  "moalboal-from-cebu-access": moalboalFromCebuAccess,
  "oslob-whaleshark-guide": oslobWhalesharkGuide,
  "oslob-day-trip-plan": oslobDayTripPlan,
  "oslob-stay-overnight": oslobStayOvernight,
  "bantayan-weekend-getaway": bantayanWeekendGetaway,
  "bantayan-access-stay": bantayanAccessStay,
  "bantayan-long-stay-feasibility": bantayanLongStayFeasibility,
  "remote-work-and-study": remoteWorkAndStudy,
  "toeic-100-up-1month": toeic100Up1month,
  "family-study-where-to-stay": familyStudyWhereToStay,
};

/**
 * slug を渡すと記事本文（Markdown）を返す。未執筆なら undefined。
 */
export function getArticleBody(slug: string): ArticleBody | undefined {
  return articleBodies[slug];
}

/**
 * 公開済み（本文あり）の slug 一覧。
 */
export function getPublishedSlugs(): string[] {
  return Object.keys(articleBodies);
}

/**
 * slug が公開済みか判定。Guide 一覧で「準備中」バッジ表示に使う。
 */
export function isArticlePublished(slug: string): boolean {
  return slug in articleBodies;
}
