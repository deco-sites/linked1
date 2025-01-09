import { ImageWidget } from "apps/admin/widgets.ts";

interface TableRow {
  items?: string[];
  checks?: boolean[];
}

interface Table {
  columnName?: string[];
  header?: string[];
  tableRows?: TableRow[];
}

interface Tab {
  name?: string;
  steps?: string[];
  image?: ImageWidget;
}

export interface Item {
  header?: string;
  descritiveTitle?: string[];
  descritiveInformative?: string[];
  topics?: string[];
  tabs?: Tab[];
  table?: Table[];
}

interface Props {
  /**
   * @title Modal with Sub Topics
   */
  items?: Item[];
}

export default function Section({
  items = [],
}: Props) {
  return (
    <div className="font-[Public_Sans]">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-[rgba(0,51,48,0.80)] text-[13.5px] font-normal mb-2">
            {item.header}
          </h2>
          {item.descritiveTitle &&
            item.descritiveTitle.map((question, qIndex) => (
              <p
                key={qIndex}
                className="text-[#003330] text-[32px] font-medium"
              >
                {question}
              </p>
            ))}
          {item.descritiveInformative &&
            item.descritiveInformative.map((info, iIndex) => (
              <p
                key={iIndex}
                className="self-stretch text-[rgba(0,51,48,0.80)] text-base font-normal leading-normal"
              >
                {info}
              </p>
            ))}
          {item.topics &&
            item.topics.map((topic, tIndex) => (
              <p
                key={tIndex}
                className="text-[#003330] text-lg font-medium mt-2 mb-1"
              >
                • {topic}
              </p>
            ))}
          <div className="mt-4">
            <div className="tabs tabs-boxed mb-4">
              {item.tabs.map((tab, tabIndex) => (
                <a key={tabIndex} className="tab">{tab.name}</a>
              ))}
            </div>
            {item.tabs.map((tab, tabIndex) => (
              <div key={tabIndex} className="mt-4">
                {tab.steps && tab.steps.length > 0 && (
                  <div className="mb-4">
                    {tab.steps.map((step, sIndex) => (
                      <p
                        key={sIndex}
                        className="text-[#003330] text-base font-normal mb-2"
                      >
                        {sIndex + 1}. {step}
                      </p>
                    ))}
                  </div>
                )}
                {tab.image && (
                  <img
                    src={tab.image}
                    alt={tab.name || "Tab image"}
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                )}
              </div>
            ))}
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
