import "./index.scss"

const NavBar = ({ destination, swiperInstance }: {}) => {
  const navList = [
    {
      text: "试听体验",
      link: "nav_link_0",
      sectionIndex: 2,
      includeSection: [1, 2, 3],
    },
    {
      text: "个性化",
      link: "nav_link_1",
      sectionIndex: 5,
      includeSection: [4, 5, 6],
    },
    {
      text: "产品细节",
      link: "nav_link_2",
      sectionIndex: 8,
      includeSection: [7],
    },
  ]

  return (
    <div
      className={`pdp_navbar ${destination?.index > 0 ? "active" : ""} ${
        destination?.index > 3 ? "is_white" : ""
      }`}
    >
      {navList.map((item, index) => (
        <div
          className={`nav_item ${
            item.includeSection.includes(destination?.index) ? "active" : ""
          }`}
          key={index}
        >
          <span
            className='text'
            // onClick={() => {
            //   window.fullpage_api.moveTo(item.sectionIndex)
            // }}
            onClick={() => {
              if (swiperInstance) {
                swiperInstance.slideTo(item.sectionIndex)
              }
            }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}

export default NavBar
