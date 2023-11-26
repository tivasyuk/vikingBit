import React from "react";
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';

const Policy = ({t}) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content-top">
                    <h1 className="title">{t('policy')}</h1>
                </div>
                <div className="content-wrapper bg-opacity">
                    <h3>{t('descriptionAboutPrivacyPolicy')}</h3>

                    <p>{t('descriptionAboutPrivacyPolicy1.1')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.2')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.3')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.4')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.5')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.6')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy1.7')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy2')}</h3>

                    <p>{t('descriptionAboutPrivacyPolicy2.1')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy2.2')}</p>

                    <ul>
                        <li>{t('descriptionAboutPrivacyPolicy2.2.1')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.2.2')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.2.3')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.2.4')}</li>
                    </ul>

                    <p>{t('descriptionAboutPrivacyPolicy2.3')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy2.4')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy2.5')}</p>

                    <ul>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.1')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.2')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.3')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.4')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.5')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.6')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy2.5.7')}</li>
                    </ul>

                    <p>{t('descriptionAboutPrivacyPolicy2.6')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy3')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy3.1')}</p>

                    <ul>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.1')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.2')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.3')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.4')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.5')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.6')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.7')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.8')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.9')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.10')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.11')}</li>
                        <li>{t('descriptionAboutPrivacyPolicy3.1.12')}</li>
                    </ul>

                    <h3>{t('descriptionAboutPrivacyPolicy4')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy4.1')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy5')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy5.1')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy6')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy6.1')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy6.2')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy7')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy7.1')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy7.2')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy7.3')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy7.4')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy7.5')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy7.6')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy8')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy8.1')}</p>

                    <h3>{t('descriptionAboutPrivacyPolicy9')}</h3>
                    <p>{t('descriptionAboutPrivacyPolicy9.1')}</p>
                    <p>{t('descriptionAboutPrivacyPolicy9.2')}</p>
                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(withTranslation()(Policy));