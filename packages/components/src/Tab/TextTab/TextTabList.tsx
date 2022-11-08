import TabList from "../TabList"

export default function ({ children }) {
  return (
    <div>
      <TabList>{children}</TabList>
      <div className="fmc--text-tab-list-indicator" />
    </div>
  )
}
