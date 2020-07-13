import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { AppHeader } from '../../components';
import CharacterCard from '../../components/CharacterCard';

const charInfo1 = [
  {
    name: '히어로',
    imageSrc:
      'https://ww.namu.la/s/ec33faeaf83664d2508da2246b2264db1ecdcc9a7d1cab2319103b894d1457ef99d923e5eaeb8f3117c2f8b1d381fd66a7faaf1a41c618e7c004f746c904694a5424253321c0960d30f929224a3033eee617a2cd639c07b259fa6bedb46d09902261b9b6622066ef035cfca9eb8fe8d3',
  },
  {
    name: '팔라딘',
    imageSrc:
      'https://w.namu.la/s/be8d2ec79dab4c9411bcb95c2c89b20ea1852de54469191f07cd0484899215f4602d6d09e4494ccae83a32af1d711e314ba22291b1448ec3c6c20c0809a3fc1ead48da01eac78a5e90b697a02f50f1f68dfa85e44005aa7419b8fb000a20b5b7d0943f3c958372c92fa8732c8a905cde',
  },
  {
    name: '다크나이트',
    imageSrc:
      'https://w.namu.la/s/1e37ab5ebf4e09ffb3532d65a5f70cb0a9bbf43a7302c721b0b606bd22bef47544d2da15257509b8eafc816c15cae6769042f9db25fb638e34aeaed1ebb9b7a9779c14c49b70d28de2bc2d3e0c7c275b27be4f62259a54434d533c636be4bc4ad86881fe409388f22d85b00e71499e1b',
  },
];

const charInfo2 = [
  {
    name: '비숍',
    imageSrc:
      'https://w.namu.la/s/bbda570aaee3f7b0efd4cc90b6de721e31a56510aff47136c98470e42f2af73bb720bd487ae7cc9ad1a554d790f40c3f72cd04c34c8199a132cdd0bafb0b1831bd5126220975073adce8daf0f4e232e0d1a8b23f0f5e2da0960a33bd1f5d7309de66b3882ac7473ab277bd1259af6c11',
  },
  {
    name: '불독',
    imageSrc:
      'https://ww.namu.la/s/cafefd35c171870f7f4ea005ecdbfd0c7309b1bc50234b681203653ce4ef1d8f89835f1ce43cb8cd9b7a0458e948ec8e22f7368cb4f14b9d37e8409972b124c4ccef7c26c4b179415b7f7e0edb377f648c3604269a1423ef56640a9ce62a6514f0cb7f4c6b374071e06e6d613e1e2d4a',
  },
  {
    name: '썬콜',
    imageSrc:
      'https://ww.namu.la/s/b8ec173d9ce499da8bd0f9c7a1002c312a8519f878702686db9d5d195514da21c257345ce7fa757ae3dbc4b190fe31d062395979a9e010718e1dd3189f18b5b7fbd80225817ff8802a33c4897a6b4a4107c4711e307b274723265746ab53a5bd',
  },
];

const charInfo3 = [
  {
    name: '보우마스터',
    imageSrc:
      'https://w.namu.la/s/b23444f01223ffd8a7c3c76c80b1a513dae54fc437de50faebfe0991f2798659e3ccc960cb8103f254b0eadc102cb5a6733a1411c7c9736aae98b27e732e82c796bfb8e6f1380c5e50c1d53faf4ae26eb2f1c7ca9d14c2d41e6733aee3724378efdce7f0403c1ac38492a9c9a0bc3261',
  },
  {
    name: '신궁',
    imageSrc:
      'https://w.namu.la/s/9dc50dd3b649f649076d3fa8f5069938191f5e1b2bb937bb316df0b129ca096620e490c518f84182fa1651b7afae71ca482ca44b54329feed6d445e79014426c4317fe00adfc7c007ee714b6e770e20500a03c9862a15f14acd35e36c4c03529ad6b9b13ee4e5da967a8801f6c055df8',
  },
  {
    name: '패스파인더',
    imageSrc:
      'https://ww.namu.la/s/b92f6c7d69f2960422a7150b24f5fd18319f9f29fd7652ace6eaf5130792311524c916c19819328c8f4db4c6eeee8667bb9f5d1858943eaa605a9eac5f3472ac3f2d73efc40d23535978335c3dded2407bbdab88ff7a2e22cac5dcf3f277f5148657a063aade1bb460bd1ba447fcd080',
  },
];

const charInfo4 = [
  {
    name: '나이트로드',
    imageSrc:
      'https://ww.namu.la/s/2400920649ccd4ae21adbcf10db0d6b55df37fff988513368ffa61cc29c86b69767dfacd737db1ea0d4bd9ae576496d10b4e65dd8d9b8cd5fadad5d7dd78466e1e96d1db2da0750b1f04abaace7dcc2346ec7fcddc246faaf41e423fbf0fa406ab90f66a59d4bed207adaf2a7ee62e9c',
  },
  {
    name: '섀도어',
    imageSrc:
      'https://w.namu.la/s/360cddfc57d9c15b8a02d2f001899af75222a58943cd8deecafb5a56ff0bd022ce9cdb2c597bc2180f8224e7c57271407740ed57e4da8f8450a59dcd57551a0c9a3e8e37de125899d7e9ca29cca991ad1b9e84e9c238e970a179af882ae94a5d1685e50b9add51451a97e7887fe30ee7',
  },
  {
    name: '듀얼블레이드',
    imageSrc:
      'https://w.namu.la/s/a63d692486bab0c5c89a90f64abb37d528afe7ba0c2cbfdfa1804c5dde5b2e45b3b3f20c18786aa22d7c7fd2be2415fe53adec353af411cba6c1298dcac46b88886354608b084f4ee71ee82a83b700f99e87cc8a2f372cf582bf3337f699ad9c8a3cca710805aa415bdbeed1c9ab01c1',
  },
];

const charInfo5 = [
  {
    name: '캡틴',
    imageSrc:
      'https://ww.namu.la/s/e4ea1135ddb176368cf3e4bd95bc6f1938890be6cfbe6804fa2a4934e48180a4e155ad1c19ece42344f52ec755c7ec2f2e1ba4e4716931bbed5112fbe68f967778887181b59899ccc842ef14b4f5484247426c24b76e75a3e850678580e2ffb601af76e83fd898d9534e8fb134535241',
  },
  {
    name: '바이퍼',
    imageSrc:
      'https://ww.namu.la/s/f6c4c49467c9fa29d36599a0850d39c63a19614f9572f32a898a637c7d6543eab2161d7a135cba6c6417af4517de32ecddc14d2766912bfa61e4c510487efe5eeee55090399a1b3b4a408f7cb8c387869bff0034d65d7478fcbde06a834734893a3e9ea7079049a99b8474768e9d3657',
  },
  {
    name: '캐논슈터',
    imageSrc:
      'https://ww.namu.la/s/d5afb0602d1e13ad10665f350c40abe0a2addb903b262c1d03d8d50be47466d50bd9a4d6f018605ea9af0cdffe3b896e87061345ba03efa2f2a7068da34127f6eb47e8df6abd21d631e16b001ffd76642499a6b78e29c08ef9ccadb6779145658fc98076c0568e2e69eb5375e30fe15a',
  },
];

const charInfo6 = [
  {
    name: '소울마스터',
    imageSrc:
      'https://w.namu.la/s/d9113eb12a2013a92a7ae89341562f39efc8ca1c3a4404b43969fe41cabc01e0adefccedb654d674b02ee261a12c6838d565d2263599b09c2d71cdaa0f33a5f490970d5f5547f5d7f5833ef2e6c64de487151701dfbc66d05e1deced0efb102742f97b956e71cd7a7ae1f050e896116d',
  },
  {
    name: '미하일',
    imageSrc:
      'https://w.namu.la/s/bf8217a1276d92e806d900e7c82477cf1e5d0ad0e45c995f1d9986d1d389295edb5ad0e0c5917c8cbf9285c9aea6ace719a34a36484ae982488fe1c64b41b931405131e1939a20d0b070a8a9bc1de9936a535c0a31797519f3ca877ae72b0fef',
  },
  {
    name: '플레임위자드',
    imageSrc:
      'https://w.namu.la/s/fbec8094625dfd0b75df532e5343a912c9408a5b2c241d97ae0d66a83961a9dd872901efce2fc8e37455d108e34610ceb2148eb9163ffad65b58590d178401005bc0613c5f7c503edbb113dd05b50bd9e9ecf214b2792e5e21896167a5320da3cffacca1d100d6b807a6e9d070229963',
  },
];

const charInfo7 = [
  {
    name: '윈드브레이커',
    imageSrc:
      'https://w.namu.la/s/cd21f0946305fcc79b2ecac82e63f3c193afdf42907a6473b9838b6f5a0261746ea47f03a0054783e3107f30d616847eb0e40d394e8589e35e87f0e7561859eb3b06696cdbe50728cd32e3161e555e6bf712a4d061c36873066e176e86939cb5',
  },
  {
    name: '나이트워커',
    imageSrc:
      'https://w.namu.la/s/1ceca08415f7400c991449a4257ceb292cf62dce687d857e727140fa0e512da7f1e68304691e2f0055d8d11afa7031c27d161fe0bf5787e9076aa943b7a77ab693f295bad838d0ef5cc4c800528156c0727ca2b61dc38b8fd28e3279cc6d24a6d8e9c405375f05235fe089e4a4e070f8',
  },
  {
    name: '스트라이커',
    imageSrc:
      'https://ww.namu.la/s/d50cfcc89fd87f9b7598ab243f607635c0aaefbe77a3e20242a9b650593541d1bdeee71465aaac991397a01e83732744962da606bc35201a52a96b5e8e5e404982ad3d2931aee1a694270bceb9702f97a6d3df4b3159b76934b9f9a97630722e791afb772bf7534adb4e11b86be61850',
  },
];

const charInfo8 = [
  {
    name: '블래스터',
    imageSrc:
      'https://ww.namu.la/s/12c5fcb9211706a0d68f75b09c20acf7fe03727d5899c82f28afc8bc2426904a95a0b7c08950d1c9913db7d3db348b1356e177a59b664b5031d1abdeca4987d34dfcf1704b530ec928e7b66fba7deac3dbf8e0d7803ccd0833b238bb667293d5857b680ef80f61925155fd98677da57d',
  },
  {
    name: '데몬슬레이어',
    imageSrc:
      'https://w.namu.la/s/69b21e756dacccf4bbf3ad57916b622bf6115d2767565e84c48989c252ce90a01318d35935ad0a0637cfb2e2f176975b85c6cf15198cb90e7c7d0d6386c0f86be05adca620bf6e8b6f2f74273f2282de4fd0527ff9b509dd175e3bd6661516e278ad8e4fa354d5b918ec924c08e099dd',
  },
  {
    name: '데몬어벤져',
    imageSrc:
      'https://w.namu.la/s/f7ec874817079306e838f671c96477dc04a6269283fd66b566d3152d5ff29e47259dc5a7591cf4e0057ecf51e7acff61e4190d8d6b0d1737ed73bdd65c7d4537f04e4a760468bf2b12dd3fa5827eaacf6596d2eb90f7d0de04d96b584d141bb56c8b511da40f8494a7a6a0c829796f9e',
  },
];

const charInfo9 = [
  {
    name: '배틀메이지',
    imageSrc:
      'https://ww.namu.la/s/4e859fcdae453a9370b2bf642bfd6f6d80d985713321acd96d86e0be29b933661f6d98475044d236b0c4580b03b4031e28d14835fdf48afd975aafec24964c43d3caa541e90369e1b2f72e17e45c32d55c207ab2535b9cb0c4d587aae864d2d6862bba2fb86ca3289adc067e23226562',
  },
  {
    name: '와일드헌터',
    imageSrc:
      'https://ww.namu.la/s/e35b8a5aa5c09ec9242c2a958c164561648ab1650aff3d82f9acb982d65dd38f8a039526eb12f61e53a79998edc2933821f997ed86d5c7070dab6af619b62730f9dd028490d627f713a8037e31a33da2fce03249afd46d05905d5848fd16c75f186c31010454d8d029ff58a6cf0e0bc3',
  },
  {
    name: '메카닉',
    imageSrc:
      'https://w.namu.la/s/9d3b127910df01dd7e0c71bbfd01dbe095ecc87a096d36d942d822196cd47a2ef8a4b726c3cec9e5e19b04d80bd675215250d0c8f3521523cced71798c1f0473df5f3911a9c495747e9470f96552df3410908a48490e33dc8e3673b95ef5a903b0979b1d04d2b973faec9fac384f1bf3',
  },
];

const charInfo10 = [
  {
    name: '제논',
    imageSrc:
      'https://ww.namu.la/s/4276a2447b63f95ff4fbe993b79f166ca2c7e138a0b5d3a519f886b01159b520850ff8ab8aae489e9c49f72aae3d34e80f4101ecffed9ee7fa422381d8dc785c7fe48c700c274d0be73d6ab31f637ecc0d7572262f26cf4b21d7520ec2af782d97ffcce5d2c31047693a1b7631e389a8',
  },
  {
    name: '아란',
    imageSrc:
      'https://w.namu.la/s/838416ccee00482f1031688da9f7f8aeb97a937ac6d7a3e24d0931bac85f7c0e5b91f0872f75db8bae8d4577fc0e35faa1f5cd8b016e79b1ff2b12b9468a8f4fc24f5ccb11a5c0a9f1d3197bd349f7b5c7fc247f56e9eda7ac69a17631cfc89a',
  },
  {
    name: '에반',
    imageSrc:
      'https://w.namu.la/s/0fc51f1e6d6528b46cd3018cd6e7a3ed4c16f49d5f6d92ab9c50951db9242e702f01afe178bd9951738dc14db9320f9f498a9fbbaf11a64beb7147b9ee0d1dff41eeafb78bb3d90fa48a24e6a00ddd8923b28b9a967b08ab0e889ef3e6d331eb67abdc94cdfe1da42bfd9858dceb400d',
  },
];

const charInfo11 = [
  {
    name: '루미너스',
    imageSrc:
      'https://w.namu.la/s/1a4d351bfabdfd0b788e094da265d13a0f4c1d8c9aa438d2dc18363ad6f2791cd6d51757a5f8eb0dce1c0d4323160f58235a27fb097dd248e8a7c88ff1b26f6620446a20f2353b945a76628f27b116404b036faf39bc8356fed964239e6c1cf8',
  },
  {
    name: '메르세데스',
    imageSrc:
      'https://w.namu.la/s/ee9138dcf66ceb7846f8cfb26ccc528f525af535e12aade71dc9b90142c4d9c2e9b1e17894739c7273487208c4cbb81995345f3f84cdc2d3ec65d503813444a513683acb8e3c33c74ccc08326644969e975be71e338891c3ffda2efcd0a016c1',
  },
  {
    name: '팬텀',
    imageSrc:
      'https://ww.namu.la/s/b651d3fb1a90e07d3467242c9a5418539a4768be76c8c76b3d50d6d65a2d99cf04a4eb47efe3b50fca719efed3e2f2d4596db5cb61e512f7a33eb3fe24a9c84feeb824f934ae36b28a4e0af49b04294826181b58620f030dea100e5c3a344834',
  },
];

const charInfo12 = [
  {
    name: '은월',
    imageSrc:
      'https://w.namu.la/s/4c1acb79d79f29e0baa3326cc2c2ed58adb4d1d63451afb5e1cc4e4317a60f9c0f3194356888e728a3f639625a71bc8cc8871bc95a872e32ab1ad12a697e7d12d687b633ba474e4982f08b4d33c1b2e2c3e8c6bc4241eb6f0ecb09a8ed8d8604',
  },
  {
    name: '카이저',
    imageSrc:
      'https://ww.namu.la/s/d1ba3c59cbfa26c76a7db32d6a9363c786c85513bea2583783c0a61e2a69f45fc831e31f869f6fbbb7a624c8634c4f303644c16c6392d880f29f6a530491b67e8d3cfde268330f00ba01d1482b02da689fc2a5dbab26c4087c3749028041cdeb6d5d9a0182ab0e48693bcdedc50d1915',
  },
  {
    name: '카데나',
    imageSrc:
      'https://ww.namu.la/s/83755560295162319d0cda94cffe5b4ebb5dca5b540a397f879b086a309136664e06de9b2b0c3c4cc9f09d12561abc5b0c028018026ff72ace34465f75f587d7280e75fde39054e33c84c435a3e4efcebc3c49af48ab938d15c4bc1cf1834a690cf5c3176d5c65f2a569e7fcf5e4977a',
  },
];

const charInfo13 = [
  {
    name: '엔젤릭버스터',
    imageSrc:
      'https://ww.namu.la/s/2b52f8ee41f42448103fcb62c4052316e048fac900c036c29616dbad6d6c465a4fa007f9ddfe04c0066b0a666ceb4ba119c50ca54aa8e11a4916de372580b70617e43dcfacdf1e097b8e09c918fa445e377934b8225fe80dd8b314f30087988105de41b89d5c4020b3584e104944fbd0',
  },
  {
    name: '아델',
    imageSrc:
      'https://w.namu.la/s/6e21400d6b7facf9827ce96ed4e59b3ce5062e12bbc469091f176183e2857774eb98c076675e62d4d7b0ccf97c385222c28509722e1a70d5b535ecbe72b7c0e02f90c81a97509eb2e2d7b62d9698aa95c99dc845e29b48d5b3acd147e279a9e84cc9e593481c0c216f65cb9956eb4019',
  },
  {
    name: '일리움',
    imageSrc:
      'https://w.namu.la/s/d90f1b4601a59bc56bb0d8e0306accf573ddb5cb46bad916aa480763899a084f8544e9e64ba437deac10d10c249dd6eb3c30f0994e083888d3102f75d47d87a08b7a59d204597324fbf584fd64454b071671b03ce2a8e41d7e1570af2396cd426bb0d006c1742fd1b4a3b4753663562b',
  },
];

const charInfo14 = [
  {
    name: '호영',
    imageSrc:
      'https://w.namu.la/s/dfdbb028c8d96a7aefd78c757d464c17509a25b4bbf959cf768ccead32b3757cafedfed3ebb04dd3d7920af2978a349426c3b4568e5203d4e04854efd93d3289107359ff44c8641eb50ed15ee1c3feade84b85cb7c0bca3315c56eaf52fa83f4102bc586a826a11d1e1b8ce0bb0643ad',
  },
  {
    name: '아크',
    imageSrc:
      'https://ww.namu.la/s/3a25b69f83ce1dce215c8e4dc0c2934c357dd3fa4e22b8cc9f8adea7473eec76922f0fd2147eb166de71778190b7eb7697b7a74957555d761620d1a02f6c667d9ba7ef7aab5aee5c3cf9f2b2efeecc00e2aad64d4705a9159ff779f30fbcc28ab5b2423023814256d44ce1bdd79edb0a',
  },
  {
    name: '제로',
    imageSrc:
      'https://ww.namu.la/s/0b9af7904a4110d3e215129a193f43d8c09c4fb3aec873e6b555627720356e78278c56f5da54f2ef154d3e047f1758d3a3684aa01a5703c57b48c6c9c1f843baeecefa69a73a3374accb1fc084ca54cec1d54ffcd137d673d44609331b50fab5cdafd73d635a776955897bcbefee1dc6',
  },
];

const charInfo15 = [
  {
    name: '키네시스',
    imageSrc:
      'https://ww.namu.la/s/988b12306aa1aafab5d4a6a12a90a2de74abdf730c235c1233a3f656b311a18c22d031da05b06eb4cf56b09e6bd75c9ae0cf1be96201f5890db31ddfb2d6fc08fa1329c88bbb03c8d4c5af04b9b3f77237188fb69973a853aa8de92c85fbc6443f4928808e96b4c0b8d23c0b6377e2f7',
  },
];

const UnionLinkPage = () => {
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(!selected);
  };

  return (
    <Container>
      <AppHeader
        title={'유니온/링크 캐릭터'}
        subtitle={'🕹메린이의 캐릭터 관리🕹'}
        icon={'ellipsis-vertical-outline'}
      />
      <ScrollView>
        <Grid>
          <Row>
            {charInfo1.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo2.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo3.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo4.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo5.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo6.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo7.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo8.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo9.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo10.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo11.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo12.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo13.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo14.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
          <Row>
            {charInfo15.map((char) => (
              <Col>
                <CharacterCard name={char.name} imageSrc={char.imageSrc} />
              </Col>
            ))}
          </Row>
        </Grid>
      </ScrollView>
    </Container>
  );
};

export default UnionLinkPage;
