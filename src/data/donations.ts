import type { DonationTier } from "@/lib/types";

export const donationTiers: DonationTier[] = [
  {
    id: "one-time",
    label: "תמיכה חד-פעמית",
    description:
      "תרומה חד-פעמית בכל סכום שתבחרו. כל שקל מסייע לקידום הג'אז הישראלי ולתמיכה באמנים.",
    amount: "100 – 1,000 ₪",
  },
  {
    id: "monthly",
    label: "תרומה חודשית",
    description:
      "הצטרפו לקהילת התומכים הקבועים שלנו. תרומה חודשית מבטיחה לנו יציבות לתכנן ולפעול לאורך זמן.",
    amount: "50 ₪ / חודש",
    highlight: true,
  },
  {
    id: "sponsorship",
    label: "חסות לפעילות",
    description:
      "חסות ייעודית לפרויקט, פסטיבל, תכנית חינוך או אירוע. החסות כוללת נוכחות ברנדינג ויחסי ציבור.",
    amount: "5,000 ₪ ומעלה",
  },
];
