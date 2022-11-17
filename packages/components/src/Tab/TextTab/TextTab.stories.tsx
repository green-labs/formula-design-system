import React from "react"
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import * as Tab from "./TextTab"
import { createDisabledArgs } from "../../utils/storybook"
import { NotificationFill } from "../../Icon"

const Template = (args) => {
  const logo = (
    <svg
      width="58"
      height="16"
      viewBox="0 0 58 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.2067 2.00592V4.37099H28.975V2.00592H32.4026V0.714844H35.0876V2.00592H38.2067ZM38.1953 9.8552C38.1953 13.4428 37.1099 14.8138 33.7622 14.8138C30.4146 14.8138 29.3292 13.4428 29.3292 9.8552C29.3292 6.26761 30.4146 4.89656 33.7622 4.89656C37.1099 4.89656 38.1953 6.26761 38.1953 9.8552ZM35.7274 9.8552C35.7274 7.63867 35.3047 7.02169 33.7622 7.02169C32.2198 7.02169 31.8085 7.63867 31.8085 9.8552C31.8085 12.0717 32.2198 12.6887 33.7622 12.6887C35.3047 12.6887 35.7274 12.0717 35.7274 9.8552ZM43.0168 8.27849H41.6115V13.9227C41.6115 14.6425 41.0288 15.2137 40.3204 15.2137H38.9608V1.00048H41.6229V5.76489H43.0283V8.27849H43.0168ZM2.32257 5.05834L2.32263 5.05828C2.73531 4.62621 3.14649 4.19572 3.54189 3.77707V1.32059H6.26114V3.86847C7.59218 5.00862 7.79107 5.17736 7.91494 5.28246L7.91495 5.28247L7.91497 5.28248C8.06541 5.41012 8.10531 5.44396 9.92871 7.01047C9.60164 7.41501 9.42802 7.63007 9.32953 7.75207C9.23472 7.86951 9.20951 7.90073 9.18404 7.93174L9.15296 7.96941L9.1529 7.96949C9.09241 8.04267 8.95481 8.20915 8.37485 8.91852C6.63372 7.41538 6.59889 7.38509 6.46368 7.2675L6.46367 7.26749L6.46364 7.26746C6.35218 7.17053 6.17242 7.01419 4.91294 5.92505L4.91248 5.92553C3.54189 7.35323 3.54169 7.35344 1.72524 9.24986L0 7.52461C0.709589 6.74708 1.51893 5.89973 2.32257 5.05834ZM1.58814 15.2825H12.111C12.8194 15.2825 13.402 14.6998 13.402 13.98V13.0088C13.402 13.0088 7.88356 12.9974 4.18171 13.0088V10.2439H1.58814V15.2825ZM10.5343 1.00068V11.1808H13.1393V1.00068H10.5343ZM14.0304 7.84453L15.7557 9.56977C16.931 8.34569 16.992 8.28217 17.0536 8.21923L17.0639 8.2087C17.1324 8.13872 17.2696 7.99869 18.7834 6.42777C20.1197 7.56994 20.1202 7.57031 22.0492 9.21397L22.0511 9.21558C22.8278 8.27318 23.0536 7.99889 23.1664 7.86175L23.2388 7.77387C23.3009 7.69837 23.3632 7.62295 23.6049 7.33038C22.7015 6.55687 22.1734 6.10176 21.6504 5.65101L21.6495 5.65022L21.6492 5.65L21.6487 5.64953L21.6471 5.64819C21.2055 5.26764 20.767 4.88974 20.1087 4.32549V1.32059H17.4009V4.29121C16.9047 4.81635 16.6096 5.12615 16.2732 5.47931C15.8118 5.96367 15.2726 6.5296 14.0304 7.84453ZM15.7214 15.2825H26.2442C26.964 15.2825 27.5467 14.6998 27.5353 13.9914V13.0203H18.315V10.4038H15.7214V15.2825ZM22.371 3.3886V5.82222C22.9194 5.82222 23.7877 5.82222 24.6561 5.83365V11.1808H27.2839V1.00068H24.6561V3.3886H22.371ZM48.7294 1.05781C45.5188 1.05781 44.2278 2.57739 44.2278 7.81025C44.2278 13.0431 45.5303 14.5627 48.7294 14.5627C51.9285 14.5627 53.2082 13.0545 53.2082 7.81025C53.2082 2.56597 51.9399 1.05781 48.7294 1.05781ZM48.7294 3.50285C50.2147 3.50285 50.5575 4.29121 50.5575 7.81025C50.5575 11.3293 50.2033 12.1176 48.7294 12.1176C47.2555 12.1176 46.8899 11.3293 46.8899 7.81025C46.8899 4.29121 47.2441 3.50285 48.7294 3.50285ZM57.2756 1.00068H54.6706V15.2139H55.9846C56.6929 15.2139 57.2756 14.6427 57.2756 13.9229V1.00068Z"
        fill="#1F2024"
      />
    </svg>
  )

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Tab.List
        defaultValue="a"
        fullWidth
        onValueChange={(_) => {}}
        contents={
          <>
            <Tab.Content value="a">this is a</Tab.Content>
            <Tab.Content value="b">this is b</Tab.Content>
            <Tab.Content value="c">this is c</Tab.Content>
          </>
        }
      >
        <Tab.Trigger title="텍스트 a" value="a" icon={NotificationFill} />
        <Tab.Trigger
          title="텍스트 "
          value="b"
          badge={{
            type: "countSimple",
            value: 9,
          }}
        />
        <Tab.Trigger
          value="c"
          badge={{
            type: "simple",
          }}
        >
          {logo}
        </Tab.Trigger>
      </Tab.List>
    </div>
  )
}

export const TextTab = Template.bind({})
TextTab.args = {}

const commonDisabled = createDisabledArgs(["props", "className"])

TextTab.argTypes = {
  ...commonDisabled,
}

export default {
  title: "Formula/Tab/Text",
  component: TextTab,
} as ComponentMeta<typeof TextTab>
