import styled from 'styled-components';
import theme from './theme';
const { colors } = theme;

export const Card = styled.div`
  padding: 1rem;
  background: ${colors.body};
  height: 100%;
  border: 3px solid ${colors.blue};
  border-radius: ${theme.borderRadiusCard};
`;

/*access token:

BQADN32Qu-vyFiII1dzOTm2uzKKSNzP8SYn2LsuGO4QFRDTvCjhLDj5XQCg_hPqiqDuVIRp-kGtBKlMQmXQAm0nu3i4K3Qr5zlJwzn8tzr8rzUdhBz7VP07ytB1IlCEEt1LyShr1cCSKIcRWp_U6B4HgpQAjgJKc2gvGHWY0oXgpM2CIAJzXHWi2
*/
