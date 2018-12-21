/**
 * Created by 99856 on 2018. 07. 17..
 */

const express = require('express');
const router = express.Router();
const reqInfo = require('../../lib/router').reqInfo
const ctrl = require('./test.controller')

router.use(reqInfo)

// 검색
router.get('/'                     , ctrl.retrieve)

// 상세 조회
router.get('/:id'                  , ctrl.find)

// 등록
router.post('/'                    , ctrl.create)

// 수정
router.put('/:id'                  , ctrl.modify)

// 삭제
router.delete('/:id'               , ctrl.remove)

module.exports = router;