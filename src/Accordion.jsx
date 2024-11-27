import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="container">

            <h3 className="review-title">Отвечаем на вопросы <br/> покупателей</h3>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Мы делаем все возможное, чтобы вы получили именно тот товар, который заказывали. Если вы столкнетесь с проблемой — товар не соответствует описанию или не был доставлен, — наша служба поддержки готова помочь.

                        В случае, если оплаченный товар не придет, вы можете обратиться к нам для решения вопроса. Мы гарантируем возврат средств или замену товара в рамках политики защиты покупателей.

                        Ваши покупки с нами безопасны и защищены!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>У меня в городе самокаты Kugoo дешевле. Почему?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Цены на самокаты могут различаться в зависимости от региона. Это может быть связано с местными акциями, уровнем конкуренции, особенностями логистики или наличием складских остатков у продавцов.

                        Мы всегда стремимся предлагать нашим клиентам лучшие условия и гарантию качества. Убедитесь, что выбранный товар соответствует вашим ожиданиям, а продавец предоставляет необходимые гарантии.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти

                        документы дают право на гарантийное обслуживание на законодательном уровне.

                        Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.

                        Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.

                        В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Где находятся пункты самовывоза в моем городе?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Вы можете найти актуальный список пунктов самовывоза в вашем городе на странице оформления заказа. Просто укажите ваш населенный пункт, и система предложит ближайшие доступные варианты.

                        Если у вас возникли вопросы или нужна помощь, наша служба поддержки всегда готова помочь!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
