"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  fullName: string;
  idNumber: string;
  phone: string;
  address: string;
  email: string;
  date: string;
  signature: string;
  decl1: boolean;
  decl2: boolean;
  decl3: boolean;
  decl4: boolean;
}

const initialForm: FormData = {
  fullName: "",
  idNumber: "",
  phone: "",
  address: "",
  email: "",
  date: "",
  signature: "",
  decl1: false,
  decl2: false,
  decl3: false,
  decl4: false,
};

const declarations = [
  'אני מצהיר/ה כי לא הורשעתי בעבירה שיש עמה קלון, וכי לא תלויים ועומדים נגדי הליכים פליליים בשל עבירות מסוג זה. (במידה וקיימת החרגה או מידע רלוונטי, יש לצרף נספח).',
  'אני מתחייב/ת לנהוג בכבוד כלפי העמותה, מוסדותיה המוסמכים (האסיפה הכללית, הוועד המנהל וועדת הביקורת), עובדיה ויתר חבריה. אפעל ביושרה ובדרך מקובלת התורמת לרוח העמותה.',
  'הצהרתי זו ניתנת לאחר שקראתי את תקנון העמותה ומטרותיה. אני מתחייב/ת שלא לבצע כל פעולה העלולה לסתור את מטרות העמותה, לפגוע בשמה הטוב או לשבש את פעילותה התקינה.',
  'אני מצהיר/ה כי נכון למועד חתימתי, איני נמצא/ת במצב של ניגוד עניינים – ישיר או עקיף – בין עיסוקיי האחרים לבין חברותי בעמותה ומטרותיה. ככל שייווצר חשש לניגוד עניינים בעתיד, אני מתחייב/ת לדווח על כך מיידית לוועד העמותה.',
] as const;

const inputClass =
  "w-full border border-border bg-surface text-dark px-4 py-3 placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors";

const taqanonSections = [
  {
    heading: "תקנון עמותה — מועצת הג'אז הישראלי (ע\"ר)",
    type: "title",
  },
  {
    heading: "1. מטרות העמותה",
    type: "section",
    items: [
      "לשמש כגוף מייצג וארגון גג לקהילת הג'אז בישראל.",
      "לתאם פעילות ג'אז ברמה הלאומית מול גורמי ממשלה ורשויות ציבוריות.",
      "לקדם חקיקה ותוכניות תמיכה ייעודיות לקהילת הג'אז.",
      "לפתח יוזמות חינוכיות בתחום הג'אז לתלמידים ולנוער.",
      "לבנות קשרים בינלאומיים ולייצג את הג'אז הישראלי בזירה העולמית.",
    ],
  },
  {
    heading: "סימן א': חברות",
    type: "part",
  },
  {
    heading: "2. קבלת חברים",
    type: "section",
    items: [
      "כל אדם הרוצה להיות חבר בעמותה יגיש לוועד בקשה בכתב. הוועד רשאי לקבל את הבקשה או לדחותה לפי שיקול דעתו.",
      "קיימים שני סוגי חברות: חברות יחידים — מוזיקאים, מחנכים ואנשי מקצוע בג'אז; וחברות תאגידית — ארגוני ג'אז, מוסדות אקדמיים ומועדוני ג'אז, בכפוף לאישור הרשם.",
      "הוועד רשאי להקים ועדת קבלה או לקבוע קריטריונים מקצועיים כגון השכלה רלוונטית או ניסיון מוכח.",
      "חבר שהתקבל יהיה זכאי לזכות הצבעה באסיפה הכללית לאחר שנה (12 חודשים) ממועד קבלתו, ויהיה לו קול אחד.",
    ],
  },
  {
    heading: "3. דמי חברות",
    type: "section",
    items: [
      "הוועד רשאי לקבוע את דמי החברות השנתיים, בכפוף לאישור האסיפה הכללית.",
    ],
  },
  {
    heading: "4. פקיעת חברות",
    type: "section",
    items: [
      "חברות בעמותה פוקעת עם מות החבר, או לגבי חבר תאגידי — עם סיום הפירוק שלו.",
      "חבר רשאי לפרוש מהעמותה על ידי הודעה בכתב לוועד.",
      "הוועד יכול לדרוש מכל חבר תעודת יושר מהמשטרה לפי שיקול דעתו הבלעדי. הוועד רשאי להמליץ לאסיפה הכללית על הוצאת חבר בשל התנהגות לא הולמת או התנהגות המפרה את כללי הדין.",
      "הוועד לא יוכל להציע הוצאת חבר אלא לאחר שנתן לו הזדמנות להשמיע את טענותיו, ולא יוכל להציע זאת מטעמים מסוימים אלא לאחר שהתרה בעבר.",
      "פקיעת החברות אינה משחררת את החבר מחובת תשלום דמי החברות שהגיעו לעמותה עד למועד פקיעתה.",
      "העמותה תשלח לחברים הזמנות, דרישות והתראות בכתב, בין אם ביד או דרך הדוא\"ל שהחבר רשם.",
    ],
  },
  {
    heading: "סימן ב': האסיפה הכללית",
    type: "part",
  },
  {
    heading: "5. כינוס האסיפה הכללית",
    type: "section",
    items: [
      "האסיפה הכללית היא המוסד העליון של העמותה. היא תתכנס לפחות פעם בשנה, עם הפסק של לא יותר מ-18 חודש בין אסיפות.",
      "הוועד המנהל קובע את התאריך, השעה והמיקום. החברים מקבלים הודעה לפחות שני שבועות מראש.",
    ],
  },
  {
    heading: "6. קוורום",
    type: "section",
    items: [
      "האסיפה הכללית לא תוכל להתכנס אלא אם נוכחים לפחות רבע מחברי העמותה.",
      "אם תוך שעה מהזמן שנקבע לא נוצר מניין, תידחה האסיפה אוטומטית בשבוע ימים לאותה שעה ובאותו מקום, ללא צורך בהזמנה חדשה.",
    ],
  },
  {
    heading: "7. סמכויות האסיפה הכללית",
    type: "section",
    items: [
      "האסיפה הכללית הרגילה שומעת דינים וחשבונות מהוועד ומוועדת הביקורת, דנה בדוח הכספי ומאשרת אותו, ובוחרת את הוועד המנהל ואת ועדת הביקורת.",
      "האסיפה הכללית אינה רשאית לשנות את תקנון העמותה, את שמה או את מטרותיה, וגם אינה יכולה להעביר את הוועד או חברים בוועד מכהונתם שלא בהתאם לתקנון.",
    ],
  },
  {
    heading: "8. החלטות האסיפה",
    type: "section",
    items: [
      "החלטות האסיפה הכללית מתקבלות ברוב קולות של המצביעים, אלא אם החוק או התקנון דורשים רוב אחר. במקרה של קולות שקולים, יושב הראש רשאי להכריע.",
      "מזכיר האסיפה אחראי על ניהול הפרוטוקול שלה.",
    ],
  },
  {
    heading: "סימן ג': הועד",
    type: "part",
  },
  {
    heading: "13. הרכב הוועד",
    type: "section",
    items: [
      "הוועד יורכב משמונה חברים.",
      "אם מקום בוועד התפנה ואין מועמד חליפי מוסכם, הוועד יכול להמשיך לפעול בהרכב מצומצם כל עוד נשארים לפחות חמישה חברים.",
    ],
  },
  {
    heading: "14. כהונת חברי הוועד",
    type: "section",
    items: [
      "הוועד רשאי להסיים את כהונתו של חבר בהחלטת רוב מיוחדת אם יש אי-התאמה או אי-תפקוד.",
    ],
  },
  {
    heading: "15. ישיבות הוועד",
    type: "section",
    items: [
      "הוועד יכול להסדיר בעצמו את מועדי ישיבותיו, ההזמנה, המניין והדרך בה מנוהלות.",
      "החלטות מתקבלות ברוב קולות המצביעים; ליו\"ר יש זכות קול בעת שוויון.",
      "הוועד חייב לנהל פרוטוקול של ישיבותיו.",
      "הוועד יכול להסמיך שניים או יותר מחבריו לחתום בשם העמותה על מסמכים ולבצע פעולות בתחום סמכותו.",
    ],
  },
  {
    heading: "16. שכר חברי הוועד",
    type: "section",
    items: [
      "לפני הצגת הצעת שכר בפני האסיפה הכללית, ועדת הביקורת תבחן את ההצעה ותמליץ עליה, תוך בדיקה שהסכומים עומדים בהגבלות החוקיות ושהעמותה יכולה לעמוד בהוצאה זו מבחינה תקציבית.",
    ],
  },
  {
    heading: "סימן ד': ועדת הביקורת",
    type: "part",
  },
  {
    heading: "17. ועדת הביקורת",
    type: "section",
    items: [
      "ועדת הביקורת תפקח על פעילות הוועד ועל הניהול הכספי של העמותה.",
      "הוועדה תקבע את סדר הדיון שלה ואת הנושאים שיובאו בפניה על ידי הוועד המנהל.",
    ],
  },
  {
    heading: "סימן ה': וועדה אמנותית/מקצועית",
    type: "part",
  },
  {
    heading: "18. הוועדה האמנותית/מקצועית",
    type: "section",
    items: [
      "הוועד רשאי למנות ועדה אמנותית/מקצועית שתייעץ לוועד בנושאים הנוגעים לפעילות האמנותית של העמותה.",
    ],
  },
  {
    heading: "סימן ו': נכסים לאחר פירוק",
    type: "part",
  },
  {
    heading: "19. נכסים לאחר פירוק",
    type: "section",
    items: [
      "פורקה העמותה ולאחר שנפרעו חובותיה נותרו נכסים, יועברו נכסים אלה לידי מוסד ציבורי אחר כמשמעותו בסעיף 9(2) לפקודת מס הכנסה, ולא יחולקו בין חבריה.",
    ],
  },
];

export default function MembershipForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [showTaqanon, setShowTaqanon] = useState(false);
  const [taqanonRead, setTaqanonRead] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  }

  function closeTaqanon() {
    setTaqanonRead(true);
    setShowTaqanon(false);
  }

  if (submitted) {
    return (
      <div className="bg-accent/10 border border-accent p-8 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-dark" stroke="currentColor" strokeWidth="2">
            <polyline points="3,8 6.5,11.5 13,4" />
          </svg>
        </div>
        <h3 className="text-dark font-bold text-xl mb-2">הטופס נשלח בהצלחה!</h3>
        <p className="text-muted">תודה על פנייתכם. ניצור אתכם קשר בהקדם האפשרי.</p>
      </div>
    );
  }

  return (
    <>
      {/* Taqanon modal */}
      {showTaqanon && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4" onClick={closeTaqanon}>
          <div
            className="bg-surface border border-border max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
              <h2 className="text-dark font-bold text-lg">תקנון מועצת הג&apos;אז הישראלי</h2>
              <button
                type="button"
                onClick={closeTaqanon}
                className="text-muted hover:text-dark transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center"
                aria-label="סגור"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5 flex-1 text-sm text-dark/90 leading-relaxed">
              {taqanonSections.map((section, idx) => {
                if (section.type === "title") {
                  return (
                    <h1 key={idx} className="text-xl font-bold text-dark mb-6 text-center">
                      {section.heading}
                    </h1>
                  );
                }
                if (section.type === "part") {
                  return (
                    <h2 key={idx} className="text-base font-bold text-accent mt-6 mb-3 border-b border-border pb-2">
                      {section.heading}
                    </h2>
                  );
                }
                return (
                  <div key={idx} className="mb-4">
                    <h3 className="font-semibold text-dark mb-2">{section.heading}</h3>
                    {section.items && (
                      <ol className="list-decimal list-inside space-y-1.5 text-dark/80 pr-2">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="px-6 py-4 border-t border-border flex-shrink-0">
              <Button type="button" variant="primary" size="lg" onClick={closeTaqanon}>
                קראתי ואני מאשר/ת
              </Button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Instruction */}
        <p className="text-muted text-sm">
          אדם החפץ להיות חבר העמותה יגיש לוועד בקשה בלשון זו:
        </p>

        {/* Declaration intro */}
        <p className="font-bold text-dark leading-relaxed border-r-4 border-accent pr-4">
          אני הח&quot;מ מבקש להיות חבר בעמותה מועצת הג&apos;אז הישראלי מצהיר בזאת כי קראתי את מטרות
          העמותה ותקנונה והם ידועים לי ומקובלים עלי. אם אתקבל כחבר בה, אני מתחייב לקיים את
          הוראות התקנון ואת החלטות האספה הכללית של העמותה.&quot;
        </p>

        {/* Personal fields */}
        <div className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-dark mb-2">
              שם <span className="text-accent">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange}
              className={inputClass}
              placeholder="שם מלא"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="idNumber" className="block text-sm font-semibold text-dark mb-2">
                מספר זהות <span className="text-accent">*</span>
              </label>
              <input
                id="idNumber"
                name="idNumber"
                type="text"
                required
                value={form.idNumber}
                onChange={handleChange}
                className={inputClass}
                dir="ltr"
                placeholder="000000000"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                טלפון
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
                dir="ltr"
                placeholder="05X-XXXXXXX"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-dark mb-2">
              מען
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              className={inputClass}
              placeholder="כתובת מגורים"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
              דוא&quot;ל <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              dir="ltr"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Declarations */}
        <div className="space-y-5">
          <p className="text-dark font-semibold">
            כמו כן אני מצהיר/ה ומתחייב/ת בזאת כדלקמן:
          </p>

          {declarations.map((text, i) => {
            const name = `decl${i + 1}` as keyof FormData;
            const isDecl3 = i === 2;
            const isDisabled = isDecl3 && !taqanonRead;
            return (
              <div key={i} className="space-y-1">
                <label className={`flex gap-3 items-start group ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
                  <input
                    type="checkbox"
                    name={name}
                    required
                    checked={form[name] as boolean}
                    onChange={handleChange}
                    disabled={isDisabled}
                    className={`mt-1 w-4 h-4 flex-shrink-0 border border-border accent-accent ${isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                  />
                  <span className={`text-sm leading-relaxed ${isDisabled ? "text-muted" : "text-dark"}`}>
                    <span className="font-bold text-accent">{i + 1}. </span>
                    {text}
                  </span>
                </label>
                {isDecl3 && (
                  <div className="pr-7">
                    <button
                      type="button"
                      onClick={() => setShowTaqanon(true)}
                      className="text-xs font-semibold text-accent hover:text-dark underline transition-colors"
                    >
                      {taqanonRead ? "לקריאה חוזרת של התקנון" : "לקריאת התקנון ←"}
                    </button>
                    {!taqanonRead && (
                      <span className="text-xs text-muted mr-3">יש לקרוא את התקנון לפני אישור סעיף זה</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Commitment paragraph */}
        <p className="font-bold text-dark leading-relaxed">
          אני מתחייב/ת לקיים את הוראות תקנון העמותה, כפי שיהיו מעת לעת, ואת החלטות מוסדותיה
          המוסמכים.
        </p>

        {/* Date + Signature */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-dark mb-2">
              תאריך
            </label>
            <input
              id="date"
              name="date"
              type="text"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
              dir="ltr"
              placeholder="DD / MM / YYYY"
            />
          </div>
          <div>
            <label htmlFor="signature" className="block text-sm font-semibold text-dark mb-2">
              חתימה
            </label>
            <input
              id="signature"
              name="signature"
              type="text"
              value={form.signature}
              onChange={handleChange}
              className={inputClass}
              placeholder="שם מלא כחתימה"
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="lg" disabled={loading}>
          {loading ? "שולח..." : "שלח טופס בקשת הצטרפות"}
        </Button>

        {submitError && (
          <p className="text-accent text-sm">
            שגיאה בשליחת הטופס. אנא נסו שוב או צרו קשר ישירות בדוא&quot;ל.
          </p>
        )}

        {/* Footer note */}
        <p className="text-muted text-xs">
          *ההחלטה בדבר קבלת המבקש כחבר העמותה או אי קבלתו נתונה בידי הועד המנהל של העמותה
        </p>
      </form>
    </>
  );
}
