import React from 'react';

// Styles
import styled from 'styled-components';

const HomeDiv = styled.div`
	h1, h2 {
		text-align: center;
		padding: 10px;
	}

	h1 {
		font-size: 1.6rem;
	}

	h2 {
		font-size: 1.2rem;
	}
`;

const Home = () => {
	return(
		<HomeDiv>
			<h1>Welcome to the Lambda Users DB</h1>

			<h2>Sign in or sign up to view content</h2>
		</HomeDiv>
	);
};

export default Home;