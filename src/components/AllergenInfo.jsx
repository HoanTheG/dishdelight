import '../styles/components/AllergenInfo.css';

const AllergenInfo = ({ allergens }) => {
    if (!allergens || allergens.length === 0) return null;

    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'high':
                return 'fa-circle-exclamation';
            case 'medium':
                return 'fa-triangle-exclamation';
            case 'low':
                return 'fa-circle-info';
            default:
                return 'fa-circle-info';
        }
    };

    return (
        <div className="allergens-section">
            <div className="allergens-header">
                <i className="fas fa-shield-alt"></i>
                <h3>Allergen Information</h3>
            </div>
            <div className="allergens-grid">
                {allergens.map((allergen, index) => (
                    <div key={index} className="allergen-item">
                        <div className={`allergen-icon severity-${allergen.severity}`}>
                            <i className={`fas ${getSeverityIcon(allergen.severity)}`}></i>
                        </div>
                        <div className="allergen-info">
                            <div className="allergen-name">{allergen.name}</div>
                            <div className="allergen-severity">
                                {allergen.severity.charAt(0).toUpperCase() + allergen.severity.slice(1)} Risk
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllergenInfo;
