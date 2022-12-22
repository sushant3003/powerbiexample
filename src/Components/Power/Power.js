// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useState } from 'react';
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import 'powerbi-report-authoring';
import './Power.css';

export default function Power() {

	const sampleReportUrl = 'https://playgroundbe-bck-1.azurewebsites.net/Reports/SampleReport';


	const [sampleReportConfig, setReportConfig] = useState({
		type: 'report',
		embedUrl: undefined,
		tokenType: models.TokenType.Embed,
		accessToken: undefined,
		settings: undefined,
	});

	const eventHandlersMap = new Map([
		['loaded', function () {
			console.log('Report has loaded');
		}],
		['rendered', function () {
			console.log('Report has rendered');
		}],
		['error', function (event) {
			if (event) {
				console.error(event.detail);
			}
		}]
	]);

	const mockSignIn = async () => {

		const reportConfigResponse = await fetch(sampleReportUrl);

		if (!reportConfigResponse.ok) {
			console.error(`Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`);
			return;
		}

		const reportConfig = await reportConfigResponse.json();

		setReportConfig({
			...sampleReportConfig,
			embedUrl: reportConfig.EmbedUrl,
			accessToken: reportConfig.EmbedToken.Token
		});
	};

	const controlButtons =
		<div className="controls">
			<button onClick={mockSignIn}>
				Embed Report</button>

		</div>;

	const header =
		<div className="header">
			<div className="title">Power</div>
		</div>;

	return (
		<div >
			{header}
			<div className='row col-12 justify-content-end d-flex'>
                    <div className='username col-5'></div>
                    <button className='navigate col-2 mr-2' style={{ marginLeft: window.innerWidth * 0.2}}>
                        <a href="/main">Home</a>
                    </button>
                    <button className='navigate col-2 ml-2' style={{ marginLeft: window.innerWidth * 0.02}} >
                        <a href="/home">Sign Out</a>
                    </button>
            </div> 
			<PowerBIEmbed
				embedConfig={sampleReportConfig}
				eventHandlers={eventHandlersMap}
				cssClassName={"report-style-class"}
				getEmbeddedComponent={(embedObject) => {
					console.log(`Embedded object of type "${embedObject.embedtype}" received`);
				}}
			/>
			{controlButtons}
		</div>
	);
}
