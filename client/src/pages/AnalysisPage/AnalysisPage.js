import * as React from 'react';
import { Container } from 'native-base';
import { AppHeader } from '../../components';

const AnalysisPage = () => {
  return (
    <Container>
      <AppHeader
        title={'통계'}
        subtitle={'📈숙제 한눈에 보기📉'}
        icon={'ellipsis-vertical-outline'}
      />
    </Container>
  );
};

export default AnalysisPage;
