import '../styles/components/LoadingSkeleton.css';

const LoadingSkeleton = ({ type }) => {
    const renderRecipeSkeleton = () => (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text short"></div>
                <div className="skeleton-meta">
                    <div className="skeleton-badge"></div>
                    <div className="skeleton-badge"></div>
                </div>
            </div>
        </div>
    );

    const renderDetailsSkeleton = () => (
        <div className="skeleton-details">
            <div className="skeleton-header">
                <div className="skeleton-title large"></div>
                <div className="skeleton-meta-row">
                    <div className="skeleton-badge"></div>
                    <div className="skeleton-badge"></div>
                    <div className="skeleton-badge"></div>
                </div>
            </div>
            <div className="skeleton-image large"></div>
            <div className="skeleton-content-grid">
                <div className="skeleton-section">
                    <div className="skeleton-subtitle"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                </div>
                <div className="skeleton-section">
                    <div className="skeleton-subtitle"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                </div>
            </div>
        </div>
    );

    return type === 'details' ? renderDetailsSkeleton() : renderRecipeSkeleton();
};

export default LoadingSkeleton;
