import { FC, useEffect, useRef, useState } from "react";
import { ButtonBack } from "../../components";
import {
  ButtonGroup,
  CardGroup,
  ConditionBody,
  ConditionContainer,
  ConditionList,
  ConfCard,
  ContainerPage,
  Gap48,
  ListenerButton,
  ParticipantButton,
  TeachersList,
  TextWrap,
  TopicGroup,
} from "./ConferencePage.styled";
import {
  ColumnGap16,
  ColumnGap64,
  OutlinedButton,
  Subtitle,
  Title,
} from "../../core/styles";
import { useParams } from "react-router";
import { conferenceInfo } from "../../core/mock/conference";
import { IConferencePage } from "./ConferencePage.interface";
import { DirectionItem, Order } from "../AboutPage/AboutPage.styled";
import { StyledChip } from "../../components/conferenceCard/ConferenceCard.styled";
import { Link } from "@mui/material";
import { ReactComponent as ParticipantIcon } from "../../icons/participant.svg";
import SfeduLogo from "../../images/sfedu_logo.png";
import IktibLogo from "../../images/iktib_logo.png";
import { ConferenceRegistrationPage } from "../ConferenceRegistrationPage";

const ConferencePage: FC = () => {
  const { conferenceId } = useParams();
  const [conf, setConf] = useState<IConferencePage | null>(null);
  const [isExpanded, setisExpanded] = useState(false);
  const [height, setHeight] = useState("0px");
  const [openConfForm, setConfForm] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const confById = conferenceInfo.find((item) => item.id === conferenceId);
    if (confById) {
      setConf(confById);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setisExpanded(!isExpanded);
  };

  const handleConfForm = () => {
    setConfForm(true);
  };

  const handleClose = () => {
    setConfForm(false);
  };

  return (
    <ContainerPage>
      {conf && (
        <>
          <ButtonBack />
          <section>
            <StyledChip
              label={`${conf.details.country}, ${conf.details.city}, ${conf.details.period}`}
            />
            <ColumnGap64>
              <Title>{conf.title}</Title>
              <div>
                <Gap48>
                  <div>
                    <Subtitle>Тематические направления</Subtitle>
                    <TopicGroup>
                      {conf.topics.map((item, index) => (
                        <DirectionItem key={`${item.direction}${index}`}>
                          <Order>{index + 1}</Order>
                          {item.direction}
                        </DirectionItem>
                      ))}
                    </TopicGroup>
                  </div>

                  <ConditionContainer>
                    <Subtitle>Сроки и условия участия</Subtitle>
                    <ConditionBody>
                      <ConditionList>
                        <li>
                          <div>—</div>
                          <div>
                            До {conf.details.finalDate} года заполнить
                            регистрационную форму по ссылке, приложив к ней
                            электронную версию научной работы, оформленную в
                            соответствии с требованиями в 
                            <Link href="#letter">Информационном письме.</Link>
                          </div>
                        </li>
                        <li>
                          <div>—</div>
                          <div>
                            После получения подтверждения о принятии
                            статьи выслать на адрес Организационного комитета
                            конференции печатную версию научной работы, с
                            подписью автора(ов) на последней странице;
                            экспертное заключение о возможности открытого
                            опубликования статьи по форме, установленной в ВУЗе,
                            в котором обучается соискатель, подписанное и
                            заверенное печатью.
                          </div>
                        </li>
                      </ConditionList>
                      <p>
                        Организационный взнос для одного очного
                        участника составляет {conf.conditions.cost} руб. и
                        включает в себя расходы по изданию программы, трудов и
                        раздаточных материалов, аренде помещений и оргтехники,
                        транспортному обслуживанию участников, услугам связи,
                        реализации культурной программы.
                      </p>
                      <ConditionList>
                        <li>
                          <div>—</div>
                          <div>
                            Расходы по проезду, проживанию и питанию несут сами
                            участники.
                          </div>
                        </li>
                        <li>
                          <div>—</div>
                          <div>
                            Бронирование мест в гостиницах Таганрога участники
                            осуществляют самостоятельно.
                          </div>
                        </li>
                      </ConditionList>
                      <p>
                        Организационный взнос для одного онлайн
                        участника составляет {conf.conditions.costOnline} руб. и
                        включает в себя расходы по изданию программы, изданию
                        трудов, подготовке и рассылке сертификатов участников,
                        аренде помещений и оргтехники, услугам связи
                      </p>
                    </ConditionBody>

                    <ButtonGroup>
                      <ParticipantButton
                        variant="contained"
                        onClick={handleConfForm}
                      >
                        <ParticipantIcon />
                        Стать участником
                      </ParticipantButton>

                      <ListenerButton variant="contained">
                        Стать слушателем
                      </ListenerButton>
                    </ButtonGroup>
                  </ConditionContainer>
                </Gap48>
              </div>

              <div id="letter">
                <Subtitle>Информационное письмо</Subtitle>
                <TextWrap>
                  <ColumnGap16>
                    <p>
                      С 1999 по 2015 годы при поддержке кафедры Безопасности
                      информационных технологий Южного федерального университета
                      проводилась научно-практическая конференция по вопросам
                      защиты информации. Целью конференции являлся обмен
                      информацией, идеями и мнениями по решению
                      научно-практических проблем в области информационной
                      безопасности через непосредственное общение ученых,
                      специалистов, преподавателей, аспирантов и студентов вузов
                      и организаций всех форм собственности. Всего в период с
                      1999 по 2015 гг. было проведено 2 региональных семинара и
                      14 конференций. Значительный научный потенциал и
                      практический опыт ученых ЮФУ по решению
                      научно-практических задач и подготовки специалистов в
                      области информационной безопасности, а также широкое
                      привлечение на семинары и конференции ведущих специалистов
                      из других вузов и организаций способствовали тому, что
                      мероприятие приобрело высокий авторитет и значимость в
                      среде специалистов по информационной безопасности.
                      Проведенные конференции по своему научному уровню и
                      практической значимости, по широте охвата проблем, по
                      кругу участников и степени влияния на научную
                      общественность быстро переросли региональный уровень и,
                      начиная с 2002 г., перешли в ранг международных. К
                      сожалению, в период с 2016 года по настоящее время
                      Конференция не проводилась по ряду причин и стечения
                      обстоятельств. В 2024 году было принято решение возродить
                      Конференцию под новым названием «Современные методы,
                      средства и технологии защиты информации», приурочив
                      проведение к 90-летию ее основателя, профессора Олега
                      Борисовича Макаревича. 
                    </p>
                    <p>
                      Приглашаем Вас принять участие в
                      шестнадцатой международной научно-практической конференции
                      имени Олега Борисовича Макаревича «Современные методы,
                      средства и технологии защиты информации – 2025». В 2025
                      году конференция проводится 19–23 мая в городе Таганроге
                      на базе Института компьютерных технологий и информационной
                      безопасности. 
                    </p>
                    <p>
                      В 2025 году доклады участников на выбор авторов могут быть
                      опубликованы либо в сборнике трудов конференции
                      «Современные методы, средства и технологии защиты
                      информации-2025» с размещением в РИНЦ, либо в журнале
                      «Известия ЮФУ. Технические науки». Журнал «Известия ЮФУ.
                      Технические науки» входит в перечень рецензируемых научных
                      изданий, рекомендованных ВАК, и относится к категории К2.
                      Обращаем Ваше внимание на то, что статьи, присланные
                      авторами для публикации в журнале «Известия ЮФУ.
                      Технические науки», будут проходить рецензирование
                      редколлегией журнала и могут быть отклонены в случае
                      несоответствия требованиям журнала. Рекомендуем присылать
                      статьи раньше конечных сроков приема, чтобы иметь
                      возможность выполнить доработку статьи в случае
                      возникновения замечаний.
                    </p>
                  </ColumnGap16>
                </TextWrap>
              </div>

              <div>
                <Subtitle>Программный комитет</Subtitle>
                <TeachersList
                  isexpanded={isExpanded ? "true" : "false"}
                  heigth={height}
                  ref={contentRef}
                >
                  <div>
                    Веселов Г. Е. — д. т. н., доцент, директор Института
                    компьютерных технологий и информационной безопасности
                    (ИКТИБ) Южного федерального университета (ЮФУ), Россия —
                    председатель;
                  </div>
                  <div>
                    Бабенко Л. К. — д. т. н., профессор, профессор кафедры
                    «Безопасность информационных технологий» (БИТ) им. О. Б.
                    Макаревича ИКТИБ ЮФУ, Россия — заместитель председателя;
                  </div>
                  <div>
                    Atilla Elci — Professor, PhD, Hasan Kalyoncu University,
                    Türkiye;
                  </div>
                  <div>
                    Luis Ramiro Piñeiro Díaz — Professor, PhD, Cryptography
                    Institute of the Faculty of Mathematics and Computing of the
                    University of Havana, Cuba;
                  </div>
                  <div>
                    Maxim Anikeev — Associate Professor, PhD, Fraunhofer SIT |
                    ATHENE, researcher, Germany;
                  </div>
                  <div>
                    Mohd Helmy Abd Wahab — Professor, PhD, Universiti Tun
                    Hussein Onn Malaysia;
                  </div>
                  <div>
                    Pradeep Kumar Singh — Professor, PhD, Central University of
                    Jammu, India;
                  </div>
                  <div>
                    Абрамов Е. С. — к. т. н., доцент, зав. кафедрой БИТ им. О.
                    Б. Макаревича ИКТИБ ЮФУ, Россия; Алгазы К. Т. — c. н. c.,
                    PhD, Институт информационных и вычислительных технологий
                    комитета науки министерства науки и высшего образования
                    Республики Казахстан (ИИВТ КН МНВО РК), Казахстан;
                  </div>
                </TeachersList>
                <TextWrap>
                  <OutlinedButton variant="outlined" onClick={toggleExpand}>
                    {isExpanded ? "Скрыть всех" : "Показать всех"}
                  </OutlinedButton>
                </TextWrap>
              </div>

              <CardGroup>
                <ConfCard>
                  <Subtitle>Место проведения</Subtitle>
                  <div>
                    <div>ул. Чехова, 2, ауд. И-201</div>
                    <div>г. Таганрог, Ростовская область, Россия</div>
                  </div>
                </ConfCard>

                <ConfCard>
                  <Subtitle>Организаторы</Subtitle>
                  <div>
                    <img src={SfeduLogo} alt="logo" />
                    <img src={IktibLogo} alt="logo" />
                  </div>
                </ConfCard>
              </CardGroup>
            </ColumnGap64>
          </section>

          {openConfForm && (
            <ConferenceRegistrationPage open={true} onClose={handleClose} />
          )}
        </>
      )}
    </ContainerPage>
  );
};

export default ConferencePage;
