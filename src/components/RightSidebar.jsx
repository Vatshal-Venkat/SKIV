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
    <div className="sidebar-right">
      {/* Articles Section */}
      <div className="sidebar-widget">
        <h3 className="section-title">ARTICLES</h3>
      </div>

      {/* Our Fraternity */}
      <div className="sidebar-widget fraternity-widget">
        <div className="sidebar-widget__body">
          <h4 className="fraternity-widget__heading">OUR FRATERNITY</h4>

          <h5 className="fraternity-widget__heading fraternity-widget__heading--secondary">
            <a href="#" className="fraternity-widget__link">Formal Associations</a>
          </h5>
          <ul className="fraternity-widget__list">
            {formalAssociations.map((name, index) => (
              <li key={index}>
                <a href="#" className="fraternity-widget__link">{name}</a>
              </li>
            ))}
          </ul>

          <h5 className="fraternity-widget__heading fraternity-widget__heading--secondary">
            <a href="#" className="fraternity-widget__link">Informal Groups</a>
          </h5>
          <ul className="fraternity-widget__list">
            {informalGroups.map((name, index) => (
              <li key={index}>
                <a href="#" className="fraternity-widget__link">{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Our Historical Profile */}
      <div className="sidebar-widget">
        <h3 className="section-title">OUR HISTORICAL PROFILE</h3>
      </div>

      {/* Community Literature */}
      <div className="sidebar-widget literature-widget">
        <div className="sidebar-widget__body">
          <h4 className="literature-widget__heading">COMMUNITY LITERATURE</h4>

          <h5 className="literature-widget__heading literature-widget__heading--secondary">
            <a href="#" className="literature-widget__link">Publications</a>
          </h5>
          <ul className="literature-widget__list">
            {publications.map((name, index) => (
              <li key={index}>
                <a href="#" className="literature-widget__link">{name}</a>
              </li>
            ))}
          </ul>

          <h5 className="literature-widget__heading literature-widget__heading--secondary">
            <a href="#" className="literature-widget__link">External Sources</a>
          </h5>
          <ul className="literature-widget__list">
            {externalSources.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="literature-widget__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Identities */}
      <div className="sidebar-widget identities-widget">
        <div className="sidebar-widget__body">
          <h4 className="fraternity-widget__heading" style={{ color: 'var(--gold)' }}>COMMUNITY IDENTITIES</h4>

          <h5 className="fraternity-widget__heading fraternity-widget__heading--secondary">
            <a href="#" className="fraternity-widget__link">Family Identifiers</a>
          </h5>
          <ul className="fraternity-widget__list">
            {familyIdentifiers.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="fraternity-widget__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Government Notifications */}
      <div className="sidebar-widget govt-widget">
        <div className="sidebar-widget__body">
          <h4 className="fraternity-widget__heading">GOVERNMENT NOTIFICATIONS</h4>

          <h5 className="fraternity-widget__heading fraternity-widget__heading--secondary">
            <a href="#" className="fraternity-widget__link">Government Orders</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
