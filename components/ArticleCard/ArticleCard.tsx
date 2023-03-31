import { FC } from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import Box from "../utils/Box";
import { base } from "../../utils/base";
import { RoundButton } from "../graphics/RoundButton";
import Flex from "../utils/Flex";
import Badge from "../Badge/Badge";

const Card = {
  Container: styled.div`
    margin: ${theme.space[1]};
    border: 1px solid ${theme.colors.accent3};
    border-radius: ${theme.borderRadius[2]};
  `,

  Title: styled.h1`
    font-size: ${theme.fontSize[5]};
    margin-bottom: ${base(1 / 2)};
    font-weight: ${theme.fontWeight[4]};
  `,

  Summary: styled.p`
    font-size: ${theme.fontSize[2]};
    color: ${theme.colors.accent6};
    font-weight: ${theme.fontWeight[2]};
  `,

  Date: styled.time`
    font-size: ${theme.fontSize[1]};
    font-weight: ${theme.fontWeight[1]};
    color: ${theme.colors.accent4};
  `,

  Image: styled.div`
    height: 250px;
  `,
};

type Props = {
  title: string;
  summary: string;
  date: string;
};

const ArticleCard: FC<Props> = ({ title, summary, date }) => {
  return (
    <Card.Container>
      <Card.Image />
      <Box
        style={{
          backgroundColor: theme.colors.accent1,
          padding: theme.space[1],
          borderRadius: `0 0 ${theme.borderRadius[2]} ${theme.borderRadius[2]}`,
          borderTop: `1px solid ${theme.colors.accent3}`,
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Summary>{summary}</Card.Summary>
        <Flex
          justifyContent="space-between"
          alignItems="end"
          style={{ marginTop: theme.space[1] }}
        >
          <Flex direction="column" alignItems="start">
            <Card.Date>{date}</Card.Date>
            <Badge content="Comp-Sci" />
          </Flex>
          <RoundButton />
        </Flex>
      </Box>
    </Card.Container>
  );
};

export default ArticleCard;
