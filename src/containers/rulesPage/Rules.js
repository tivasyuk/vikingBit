import React from "react";
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

const Rules = ({t}) => {
    return (<div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">{t('terms')}</h1>
                </div>
                <div className="content-wrapper bg-opacity">
                    <h3>{t('descriptionAboutPrivacyPolicy')}</h3>

                    <p>{t('descriptionAboutRules1.1')}</p>
                    <p>{t('descriptionAboutRules1.2')}</p>
                    <p>{t('descriptionAboutRules1.3')}</p>
                    <p>{t('descriptionAboutRules1.4')}</p>

                    <h3>{t('descriptionAboutRules2')}</h3>

                    <p>{t('descriptionAboutRules2.1')}</p>
                    <p>{t('descriptionAboutRules2.2')}</p>
                    <p>{t('descriptionAboutRules2.3')}</p>
                    <p>{t('descriptionAboutRules2.4')}</p>

                    <h3>{t('descriptionAboutRules3')}</h3>
                    <p>{t('descriptionAboutRules3.1')}</p>
                    <p>{t('descriptionAboutRules3.2')}</p>
                    <p>{t('descriptionAboutRules3.3')}</p>
                    <p>{t('descriptionAboutRules3.4')}</p>

                    <h3>{t('descriptionAboutRules4')}</h3>
                    <p>{t('descriptionAboutRules4.1')}</p>
                    <p>{t('descriptionAboutRules4.2')}</p>
                    <p>{t('descriptionAboutRules4.3')}</p>
                    <p>{t('descriptionAboutRules4.4')}</p>
                    <p>{t('descriptionAboutRules4.5')}</p>
                    <p>{t('descriptionAboutRules4.6')}</p>
                    <p>{t('descriptionAboutRules4.7')}</p>
                    <p>{t('descriptionAboutRules4.8')}</p>
                    <p>{t('descriptionAboutRules4.9')}</p>
                    <p>{t('descriptionAboutRules4.10')}</p>
                    <p>{t('descriptionAboutRules4.11')}</p>

                    <h3>{t('descriptionAboutRules5')}</h3>
                    <p>{t('descriptionAboutRules5.1')}</p>
                    <p>{t('descriptionAboutRules5.2')}</p>
                    <p>{t('descriptionAboutRules5.3')}</p>
                    <p>{t('descriptionAboutRules5.4')}</p>
                    <p>{t('descriptionAboutRules5.5')}</p>

                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(withTranslation()(Rules));