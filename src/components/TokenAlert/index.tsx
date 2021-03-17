import React from 'react';
import { Alert } from 'antd';
import { useIntl } from 'react-intl'

function TokenAlert() {

    const intl = useIntl();

    return (
        <div>
            <Alert message={intl.formatMessage({ id: "tokenAlert" })}
                type="warning" closable
            />
        </div>
    )
}

export default TokenAlert;