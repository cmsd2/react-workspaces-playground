import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
	options: {
		theme: themes.dark
	}
});

const comps = require.context('@project/components/src', true, /\.stories\.(?:js|jsx|ts|tsx)$/);

configure(() => {
	comps.keys().forEach(filename => comps(filename));
}, module);
