import { registerEnumType } from '@nestjs/graphql';

export enum ReportEnum {
  FAKE = 'FAKE', //Fake profile
  SCAM = 'SCAM', //Scam or commercial
  HATE = 'HATE', //Hate speech
  POLICY = 'POLICY', //Off Policy Behavior
  INAPPROPRIATE = 'INAPPROPRIATE', //Inappropriate content
  UNDERAGE = 'UNDERAGE',
  RECOGNIZE = 'RECOGNIZE', //Recognize user
  NOT_INTERESTED = '', //I'm just not interested
  OTHER = 'OTHER',
}

registerEnumType(ReportEnum, {
  name: 'ReportEnum', // this one is mandatory
  description: 'reasons for flagging and/or blocking user', // this one is optional
});
