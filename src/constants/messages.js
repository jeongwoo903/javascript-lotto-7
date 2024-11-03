import {
  LOTTO_CONDITION,
  PRICE_MAX_AMOUNT,
  PRICE_PER_LOTTO,
} from './constants';

const PREFIX_ERROR = '[ERROR]';

const INPUT_MESSAGES = Object.freeze({
  purchase_amount: '구입금액을 입력해 주세요.\n',
  winning_numbers: '당첨 번호를 입력해 주세요.\n',
  bonus_number: '보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGES = Object.freeze({
  empty: `${PREFIX_ERROR} 값을 입력해주세요.`,
  numeric: `${PREFIX_ERROR} 숫자만 입력 가능합니다.`,
  positive: `${PREFIX_ERROR} 양의 정수만 입력 가능합니다.`,
  invalid_amount: `${PREFIX_ERROR} 구입 금액은 ${PRICE_PER_LOTTO}원으로 나누어 떨어져야 합니다.`,
  over_max_amount: `${PREFIX_ERROR} 구입 금액은 ${PRICE_MAX_AMOUNT}원 이하여야 합니다.`,
});

export { PREFIX_ERROR, INPUT_MESSAGES, ERROR_MESSAGES };
