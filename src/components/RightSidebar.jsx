const formalAssociations = [
  'All India Sistakarana Association',
  'Sista Karana Association, Kharagpur',
  'Sistakaranam Association of Durg-Bhilai-Charoda',
  'AIPSKA',
  'Rajam Sistakarana Sangham',
  'Sistakaran Association, Bhubaneswar, Odisha',
  'Karunagari Youth Welfare Association',
  'Sistakaranam Welfare Association, Hyderabad',
  'Sista Karanam Yuvatha, Andhra Pradesh',
  'Sistakaranam Association, Chhattisgarh',
  'ISSKA'
];

const informalGroups = [
  'Kalam Snehitulu',
  'Bengaluru Karanalu',
  'Businessman'
];

const publications = [
  'Sistakaranam Charitra',
  'Kula Deepika Monthly',
  'Sista Vaani Quarterly',
  'Heritage & Identity Journal',
  'Community Chronicles Digest'
];

const externalSources = [
  { label: 'Wikipedia - Sistakaranams', href: '#' },
  { label: 'Historical Archives Online', href: '#' }
];

const familyIdentifiers = [
  { label: 'Surnames', href: '#' },
  { label: 'Gotramulu', href: '#' },
  { label: 'Sistakaranams - by ARK Rao', href: '#' }
];

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Articles Section */}
      <div className="sidebar-widget">
        <h3 className="section-title">ARTICLES</h3>
      </div>

      {/* Our Fraternity */}
      <div className="sidebar-widget">
        <h4 className="right-sidebar__heading">OUR FRATERNITY</h4>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">Formal Associations</a>
          <ul className="right-sidebar__list">
            {formalAssociations.map((name, index) => (
              <li key={index} className="right-sidebar__list-item">
                <a href="#" className="right-sidebar__link">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">Informal Groups</a>
          <ul className="right-sidebar__list">
            {informalGroups.map((name, index) => (
              <li key={index} className="right-sidebar__list-item">
                <a href="#" className="right-sidebar__link">{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Historical Profile */}
      <div className="sidebar-widget">
        <h4 className="right-sidebar__heading">OUR HISTORICAL PROFILE</h4>
      </div>

      {/* Community Literature */}
      <div className="sidebar-widget">
        <h4 className="right-sidebar__heading">COMMUNITY LITERATURE</h4>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">Publications</a>
          <ul className="right-sidebar__list">
            {publications.map((name, index) => (
              <li key={index} className="right-sidebar__list-item">
                <a href="#" className="right-sidebar__link">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">External Sources</a>
          <ul className="right-sidebar__list">
            {externalSources.map((item, index) => (
              <li key={index} className="right-sidebar__list-item">
                <a href={item.href} className="right-sidebar__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Identities */}
      <div className="sidebar-widget">
        <h4 className="right-sidebar__heading">COMMUNITY IDENTITIES</h4>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">Family Identifiers</a>
          <ul className="right-sidebar__list">
            {familyIdentifiers.map((item, index) => (
              <li key={index} className="right-sidebar__list-item">
                <a href={item.href} className="right-sidebar__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Government Notifications */}
      <div className="sidebar-widget">
        <h4 className="right-sidebar__heading">GOVERNMENT NOTIFICATIONS</h4>

        <div className="right-sidebar__subsection">
          <a href="#" className="right-sidebar__subheading-link">Government Orders</a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
