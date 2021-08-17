import React, { Component } from "react";

const logoList = [
    {
        imageUrl: 'https://yt3.ggpht.com/ytc/AKedOLS3y0rIVRGx8vjlAQOxFGq7Xl4D4vUCHDwY37-WPQ=s88-c-k-c0x00ffffff-no-rj',
        title: 'OKD CHANNEL',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/Jkdd-beennie02Ki8vZSEQr8yy9utRpZ3ILlqY9PQq3a_TR-LIS1GM_Et8bBPWRPqrIXwICnr95sayYSq8GzdD0FWtBDzSD7LaMGx-_gKUP5UaP8JewYNIYKLvIJ-8W_8Em8rhoyrv22EpKOTVwL51voenwmW4d3FFG66GC9FTsqOnriHXl0XWNwhsb2jocgm3H2dAZuP1hox0DmkJUNi7KI25rw9fSKRDtR3EbGCcz0V1QvSWrAvFs21dYh4-hXytBhFt-H5JsDl1bqudhr24AThqCz5ZlrDX9pd1nSf0Ir00x_b6a8NCk9WZOHZoo47OgluHHJG8OJGkaiAj3SNPZpXqc3bZuLwUEjdRcnYiPFf288KyKeGXQ-4Ts9QPer5Mzor1GNauvGjQbgrJNHrSMT8Ehg6Qt-o74m_ri45Qgq58XoXQhIhaMRMIBwNNw9ZlaYGn1dXWFc0p0UopeMo9nqp-yq8WYwoq_qfL0et6F3svH_vwLFU3P-2tiKahERtb8065XkI85Kr5HS-otTm0Y6nC75TFJDWurKW-l6FzwWitDvRzrfCttXyDpcRUtxJZYRPz372h83Eg-0E_h5MlknSsPYJqqkfjgUQqMo-kZ-62wTW59DN4RaNocstJjvf4NMtLLJtH84wQ_Z9Xb8CQ7wXEkVqoFPRPgKBqBEgyZpFk-M4Es0ThL1mrzmUCLkwTnskEIIMejcQt8Cvy2hD0I=s976-no?authuser=1',
        title: 'MEE POONG STUDIO',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/EVV0HbjSUb8QzjKxJhm3xK63Lu-8w29_pHGxVSBWdMpRv_I4MUht58dUt-G8L7DkZT2VWTMxJ6Z0T_EwabiF9euT5cR5NjjGPjagMZP5SZD-7o2tDNr7KIdMZzgopJcVDWOpqUyUVLMZurWUMP6JlkPErGoACm0pbs2QA3SE5QSjEdWcbM-84YCNsVzjXGnieoBtuP6udkmoZ3C8Thabds5KmlryaAR7CmL539DVtX87IGnTp_aqtDnFeM2If6W0Oq9ZICftcl_9mqo9Ts4s6U5Sve_AS9HGOh83ubAcoiA-6trQ7PRdgVdmzKHa2mA7udtSX3bkYx7pb08H_NHirHRZgYsTs-b4bVvcNTrGD0KNve8zlGYOupVsXahrqQyjOjRbn-Vj61WA4mmvMSSA3j-CzILMZ43vZ0aEh8LkgVRT9vCijAFD6pDzV8pP_MRnn-Bm1Dy9xIBplmzx-c3ZXwguerumij3KO9sRqi44t4TAk_K843Sz-Ofp8nfj2rpmYjmbb0URXdTNuLCHQ2LfoOEs-CQfzJ1M7jYN2CytR6uuGyKG6FAlrkiRYexeud9OOdeB7WnneWryFo-X-WHrizwKMHenE8IclM4tx_5j8YXDkOTPWOOqHrsY1h9ullgKKlufByU1Gc5pcGmGF8pMOMTb9txQAtm7HhKQG6f_v-Y0V_EvuaIwuiVYRnUm9KyRZv_V4X_cH0UVaoCMY4rkg4M=s976-no?authuser=1',
        title: 'MEE POONG BEAUTY',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/XUHrEGj_bovmFqHwgDxJ61vcJ8TZ3mS0md2--pt_SU6RPwD-jHWh0GukgzV7KEqhE3PQWvsB-ZrCekDBVxE8GqtZkGJuW9klzlasd4Mr7RMM6S9QxC80TJeVNlPqyvmoDnAozBKe0tn1cR6ocHyA_yf6KHniFOzwCg8dl2TNaOCM1d2zofINSOjhHuffA9SwjnhyeiiEba8V8HC1wLvtloRLcUGn9HxzAF3UI2XzWsvTKWUiD_BWKq8upOS9eQ1laxC26gSstenbTjath1ZQe2CJhaS5gk-X1ef-QM9lNe8opNgKmdcU3JGYk-ISXzZX1rh0JcVD1sP3dslB8W8nOkwRAwJ91r7XSHUIa3_M_aKivpepBIlZqMt0AWjgD1LUoLx6_ugZwgNyCm4ngfRPZnh15-zFLkcnWX3-admwAwiJO1IC0qA08EX0a8fL6FFgFZP__GksuFX89OiNbYZQxFUt-j9H8Iel4ifz2EaHQNXJzJhuijb3keOd7BjE_v7PvBjF8G4SKIsjmmSHPLeOU5yJJtowa5T6fUji4oVs5viUSCwUfYe6y9xByNjCXNLBT-lx0mu7ICNsAo2sOe2Ix1nP6r0x_x_6rHKPwwm8K56Nxze6KjKjLwGVAmVakLJuM3aoE_LYCebBcqcuP0qGpG9jTf9IWq5d9q-dTbcwKMQBaAkc29Bdp3OJndu_x2xsRSSirPM_7Zb-p2kkbwzPCys=s976-no?authuser=1',
        title: 'MEE POONG MUSIC',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/Yv0j4qxsue3CtC5xOoAiJdmgf17hWEzDflvKwCS3bV3nS72VW1l_cvvT0KrmZPLYwZk7jru_CPI3xsBbxkJuGss9vfnZHgUzK035W7rgwtn3WK7NmwNtj6weagnewfr3SXShgZk7d-4Q_K0bbEOoMaaW2B0vdrSbPBoRK69TLWN9ySAgNVXOyx2go0_6sGujpmKTtuhw1-L-s_4FI_w2bkwlCN-NPl6HXNyS1Jqi5MRGMshSG5XZAYeNoinzO8mj91yTC0bZN5KQu5Pn5IFs46Ro3xymFQpxDsA9S_WnV5Il5x_VSbsqzWlVrolFl9VR_KlaeYZAZggujOQilIJ6QG91kiFEqptYLF4I-3z6BdboOMxK8yROAH7OP2-yxS-5XhPshREuu5eFX15C5evwCfE_RtX7coCe9QM-Rqi3X7b4aYCAyYfB0QZ_RMHrBuwa21BFfaUiJMq6bOgZTLRQbm7_7f1p8k9crKD4sCbk7bXfpzqEkvAPkdg9en4t5HW79z4e1MNbcWotjZxP_9GtVOGC2pEwNECIslbiGvJOYyvDKjW7-mcb6OuK_GRJrf7CQo3y04wJaTX1511SYS4GWq96whxoU1lUnNkr-OcO-Fa_h1bsD3oaWlCApTs1TRr4un6pPnrBO02ml72CaMafQCg7Wz5_S7EBeGcqEFO--mBBCkxxwQ62t0Iye1iz0ZUMY98FX9KHdtNxL3ZBOhQYdAE=w612-h792-no?authuser=1',
        title: 'MEE POONG FAMILY',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/ee8Z0ixUAH32AMuOKNzeyq8iqv2it5z4pY2zhfpebGuRAvwS9-tCY8hBdJS7XX0_4IOfTU4tzvejuhGop7nK3gqNPJEs5q6SxvWDRy7F4uL8wE1PZGAiw7aBItK9xtUodChqxKpu6AibdI-BwXehSdi9u-N3h7P9s0CsOK8sGMyxOUZMOtyn3utfTlQxLVVwh0nFYq13DPEZEj-jRUdLJ1jISn5cHT7Xbz7bZaQiIN9DexoVfEBdsBoEf68_6laYklCFXw-6cStmD9jP6kbkkLZXfovuyO_1FFnSBU4juo1eNmGKAXkaWancxzaPulhkmojfYiSB2-GEr5ILQh_g7324HuGm5LjtlZrnMXiAQpl8CICaRDhmkb8eVZrOrzSTi2tkQCAd-p2xnTp2E7sKO0-wJaP45AWI9Gw49PrCE7z-A9TWPgX659Iz1Epn5ZFyVXGM-GG6SzVVlQ0g7tV5rtxXvWo8n735kvqXLB9K-paFy3CzNg0Qv0PEccMzxjcHF-hfoD1yfxzZdKKk8104teHYohJ9FinuvODYCOyjE_WBVv8GrbVwteZhuDrAmopFH4mKJ9YioLPIA8AbQKCg0-o6CSCOa8eians0bs99G47ib2a1U6xlj3O2y6o_d7Xr5sN1sht47PBufYfHzGX_si5QEQd6SAyZ7LxabkwkQO6pxwyROP21x2GrrmQk7U2D-k2eV-OhZAicn0Kr7P4ibcU=s919-no?authuser=1',
        title: 'LOTTERY 666',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/qslxA1ZwKeF9WDsseMWODGZP-6d4sHNdatg-rPHCwj85LbBt9QZ-PDagA47vriVoT1cHsmUkSIp1nr-acSIF1zRK5QqBGijTSC4LF9PMBjPpZw0hY-zG23FpBrBSmBxmYnFsPrWB_qDTOZjCSJnzM_BcWBniABXXglnJj59fj9PlmKK5AA_wjSJ7i9Qef8wlq8rqDw9Ju3j-issDeXmkkKa74Rq4J5zjww9fFg3KljEkcE89o9FYwQQ0ZSk41fnjm1jKOkreEvZFKkx6_pxdrHIkfI0KQ74nrW4gMiwpncVMF9q2Rv1aR_lxTjpvKxnnDvNSZIhVKslPUhQ1-UIAEUgF3gX7SHeUjKvzoNtKgwez5WWQFKOJ_Tc4TbWZ57UKYNnPTHbMTiL3c4sxrmh42y7zGlc_VUMzdlXL2ta-EEaPI0QXr9LgJu6nuqyF1pI1tYwxiUQF1fNEg3rQ_qaHVXMYRx1y5KhQRJxqV2kupS7UUMGcV9VXuQ2jl8E3GOjYofbQBgEaqGfLE_I5XrCoytbd2pFBgUHHXUkXMEgcKZo7_oRzFBwNTcqnf6_ViK-iOxgHacAdemTv7dOSe18JRu65kSpvPMW0f05Ap3jQEMYK9Z9hA6T5xTIl2JFzZmtOqaC7KXYOwE8CVLiRHRTEji0smeEykY0lLr1LSkx-q9gl8O5B9jcUnyfH2RhohlKG9xnIA1bqJ-jc3XUcC8gL4Xo=s919-no?authuser=1',
        title: 'MEE POONG WEDDING',
    },
    {
        imageUrl: 'https://lh3.googleusercontent.com/EPL9TV0SNUE6Cipln2gpQP85byiXexHytSpuh1gGzJOPVu8WvgPUTxeEqQJ_aveSUi7bSZlNt0bToQ0Z_lMyppYbN4YHCjaGWksobjUTX7mFWKH2GWJKBSdTdU8Ik9IkGN1Vyye7mkHdymQYrG_-5IAqEgoSKmUFwTt8zS8CRW6xnonGrWhFXJ4Jynw-3rTjMnng7GgfbagpwxxVcce1ocGFhL26bjnFZp21llqOmmDCxryKqbnGElJVW9nRsaFkM3HYJtSmvZCj8ABT7slmbROzWgC4thC5_i5tGFtYEQ_24aMrjGPjonZhUsb_vUaiHFU-DGESP9CCqgha4ZYO9O_xh7mji2yeIHr71QpUWebRNwEgZFjnwZjeN6mWRYYzYbpRHTcjCwsyimSk--tnHHXzrpFkyMkRTxBlkERF-nS9-iCvXlnPLn2I5rSO7E5Zvjl62p8RlhF633BUauUz6nHnIu8vUs4t1KqBY2MmK7PT_s_hEZOArdvmqA76jAkRgZluwRKNbcMQcZhflSRi37ltE-WLm2pWXWWt8I5kPp051gAdcLocCvwFmKhmXyRwoJ8J0yHw00ZAUS3Bs0KjlyCdbm8SLiY6CrDt7YRt_kaYn9TCGaKzcXYObpAI1gxV0sfdrsmgqltlor1F28hl98VSOWNTZsyiGcsJwNBylfWg_Ov5qwd3FrMGBaOr3opq_Db-YxTkSjL4pw1oCr-g6rs=s800-no?authuser=1',
        title: 'จั๋งดุ๋งพระแท้ 666',
    },
]

class BrandMeePoong extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="brand-style-2">
                    {logoList.map((val, i) => (
                        <li>
                            <img src={val.imageUrl} alt={val.title} />
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandMeePoong;