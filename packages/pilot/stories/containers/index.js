import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'

import AnticipationForm from './Anticipation/Form'
import BankAccountSelector from './Settings/BankAccount/Selector'
import Balance from './Balance'
import BankAccountForm from './Settings/BankAccount/Add'
import AddAccount from './AddRecipient/BankAccountStep/AddAccount'
import BankAccountStep from './AddRecipient/BankAccountStep'
import ConfirmRecipientStep from './AddRecipient/ConfirmStep'
import BoletoForm from './Refund/BoletoForm'
import BoletoRefundConfirm from './Refund/BoletoConfirmation'
import BoletoRefundResult from './Refund/BoletoResult'
import CardConfirmation from './Refund/CardConfirmation'
import CardForm from './Refund/CardForm'
import CardResult from './Refund/CardResult'
import RecipientListState from './RecipientList'

import {
  ManualReviewApproveForm,
  ManualReviewRefuseForm,
} from './ManualReview/Form'

import {
  ManualReviewApproveResult,
  ManualReviewRefuseResult,
  ManualReviewErrorResult,
} from './ManualReview/Result'

import {
  ManualReviewStepApproveConfirmation,
  ManualReviewStepApproveResult,
  ManualReviewStepRefuseConfirmation,
  ManualReviewStepRefuseResult,
  ManualReviewStepResultError,
} from './ManualReview'

import {
  BoletoRefund,
  CreditCardRefund,
} from './Refund'

import IdentificationStep from './AddRecipient/IdentificationStep'
import Reprocess from './Reprocess'
import ReprocessForm from './Reprocess/Form'
import ReprocessResult from './Reprocess/Result'

import {
  SelfRegisterCreateAccount,
  SelfRegisterCheckCNPJ,
  SelfRegisterTypeCNPJ,
  SelfRegisterWithoutCNPJ,
  SelfRegisterCompanyData,
  SelfRegisterPartnerData,
  SelfRegisterPartnerAddress,
  SelfRegisterAlreadySell,
  SelfRegisterBusinessDetailPresent,
  SelfRegisterBusinessDetailFuture,
  SelfRegisterSalesAmountPresent,
  SelfRegisterSalesAmountFuture,
  SelfRegisterContract,
  SelfRegisterWaitingRiskAnalysis,
  SelfRegisterRefusedAccount,
} from './SelfRegister'

import SelectAccount from './AddRecipient/BankAccountStep/SelectAccount'
import Withdraw from './Withdraw'
import WithdrawConfirmation from './Withdraw/Confirmation'
import WithdrawForm from './Withdraw/Form'
import WithdrawResultSuccess from './Withdraw/Result/Success'
import WithdrawResultError from './Withdraw/Result/Error'

import {
  AnticipationConfirmationDisabled,
  AnticipationConfirmationWithAutomaticTransfer,
  AnticipationConfirmationWithError,
  AnticipationConfirmationWithoutAutomaticTransfer,
} from './Anticipation/Confirmation'

import {
  AnticipationResultError,
  AnticipationResultWithAutomaticTransfer,
  AnticipationResultWithoutAutomaticTransfer,
} from './Anticipation/Result'

import Anticipation from './Anticipation'
import BoletoConfigurationForm from './Settings/Boleto/Form'
import BankAccount from './Settings/BankAccount'
import ConclusionStep from './AddRecipient/ConclusionStep'

import {
  ErrorStepSubmit,
  ErrorStepLogin,
  ErrorStepPermission,
  ErrorStepServer,
  ErrorStepDefault,
} from './AddRecipient/ErrorStep'

import ConfigurationStep from './AddRecipient/ConfigurationsStep'
import RecipientBalance from './RecipientDetails/Balance'

import {
  AddRecipientFetchError,
  AddRecipientSubmitError,
  AddRecipientSuccess,
  AddRecipientSuccessNoAccounts,
} from './AddRecipient'

import RecipientDetailConfig from './RecipientDetails/Config'
import RecipientDetailInfo from './RecipientDetails/Info'
import RecipientDetails from './RecipientDetails'

storiesOf('Containers|Bank/Account', module)
  .add('selector', () => <BankAccountSelector />)
  .add('settings', () => <BankAccount />)

storiesOf('Containers|Page containers', module)
  .addDecorator(checkA11y)
  .add('Boleto Configuration Form', () => (
    <BoletoConfigurationForm />
  ))
  .add('Recipient Detail Info', () => (
    <RecipientDetailInfo />
  ))
  .add('Recipient Details', () => (
    <RecipientDetails />
  ))
  .add('Recipient Configuration', () => (
    <RecipientDetailConfig />
  ))
  .add('Recipient Info', () => (
    <RecipientDetailInfo />
  ))
  .add('Recipient Balance', () => (
    <RecipientBalance />
  ))
  .add('Add Recipient', () => (
    <AddRecipientSuccess />
  ))
  .add('Add Recipient no previous accounts', () => (
    <AddRecipientSuccessNoAccounts />
  ))
  .add('Add Recipient fetch accounts error', () => (
    <AddRecipientFetchError />
  ))
  .add('Add Recipient submit error', () => (
    <AddRecipientSubmitError />
  ))
  .add('Recipient Conclusion Step', () => (
    <ConclusionStep />
  ))
  .add('Recipient Error Step default', () => (
    <ErrorStepDefault />
  ))
  .add('Recipient Error Step submit', () => (
    <ErrorStepSubmit />
  ))
  .add('Recipient Error Step login', () => (
    <ErrorStepLogin />
  ))
  .add('Recipient Error Step permission', () => (
    <ErrorStepPermission />
  ))
  .add('Recipient Error Step server', () => (
    <ErrorStepServer />
  ))
  .add('Recipient Configuration Step', () => (
    <ConfigurationStep />
  ))
  .add('Anticipation Form', () => (
    <AnticipationForm />
  ))
  .add('Add Account', () => (
    <AddAccount />
  ))
  .add('Recipient Confirm Step', () => (
    <ConfirmRecipientStep />
  ))
  .add('Bank Account Step', () => (
    <BankAccountStep />
  ))
  .add('Recipient list', () => (
    <RecipientListState />
  ))
  .add('Recipient identification step', () => (
    <IdentificationStep />
  ))
  .add('Manual review approve form', () => (
    <ManualReviewApproveForm />
  ))
  .add('Manual review refuse form', () => (
    <ManualReviewRefuseForm />
  ))
  .add('Manual review approve result', () => (
    <ManualReviewApproveResult />
  ))
  .add('Manual review refuse result', () => (
    <ManualReviewRefuseResult />
  ))
  .add('Manual review result error', () => (
    <ManualReviewErrorResult />
  ))
  .add('Manual review step approve confirmation', () => (
    <ManualReviewStepApproveConfirmation />
  ))
  .add('Manual review step approve result', () => (
    <ManualReviewStepApproveResult />
  ))
  .add('Manual review step refuse confirmation', () => (
    <ManualReviewStepRefuseConfirmation />
  ))
  .add('Manual review step refuse result', () => (
    <ManualReviewStepRefuseResult />
  ))
  .add('Manual review step result error', () => (
    <ManualReviewStepResultError />
  ))
  .add('Boleto form', () => (
    <BoletoForm />
  ))
  .add('Boleto refund confirm', () => (
    <BoletoRefundConfirm />
  ))
  .add('Boleto refund result', () => (
    <BoletoRefundResult />
  ))
  .add('Card refund confirmation', () => (
    <CardConfirmation />
  ))
  .add('Card refund result', () => (
    <CardResult />
  ))
  .add('Card refund form', () => (
    <CardForm />
  ))
  .add('Boleto transaction refund', () => (
    <BoletoRefund />
  ))
  .add('Card transaction refund', () => (
    <CreditCardRefund />
  ))
  .add('Balance', () => (
    <Balance />
  ))
  .add('Reprocess form', () => (
    <ReprocessForm />
  ))
  .add('Reprocess result', () => (
    <ReprocessResult />
  ))
  .add('Reprocess step confirmation', () => (
    <Reprocess
      statusMessage=""
      stepStatus={{
        confirmation: 'current',
        result: null,
      }}
    />
  ))
  .add('Reprocess step result', () => (
    <Reprocess
      statusMessage="Success!"
      stepStatus={{
        confirmation: 'success',
        result: 'current',
      }}
    />
  ))
  .add('Reprocess step result error', () => (
    <Reprocess
      statusMessage="Internal server error"
      stepStatus={{
        confirmation: 'success',
        result: 'error',
      }}
    />
  ))
  .add('Self Register Create Account', () => (
    <SelfRegisterCreateAccount />
  ))
  .add('Self Register Check CNPJ', () => (
    <SelfRegisterCheckCNPJ />
  ))
  .add('Self Register Type CNPJ', () => (
    <SelfRegisterTypeCNPJ />
  ))
  .add('Self Register Without CNPJ', () => (
    <SelfRegisterWithoutCNPJ />
  ))
  .add('Self Register Company Data', () => (
    <SelfRegisterCompanyData />
  ))
  .add('Self Register Partner Data', () => (
    <SelfRegisterPartnerData />
  ))
  .add('Self Register Partner Address', () => (
    <SelfRegisterPartnerAddress />
  ))
  .add('Self Register Already Sell', () => (
    <SelfRegisterAlreadySell />
  ))
  .add('Self Register Business Detail Present', () => (
    <SelfRegisterBusinessDetailPresent />
  ))
  .add('Self Register Business Detail Future', () => (
    <SelfRegisterBusinessDetailFuture />
  ))
  .add('Self Register Sales Amount Present', () => (
    <SelfRegisterSalesAmountPresent />
  ))
  .add('Self Register Sales Amount Future', () => (
    <SelfRegisterSalesAmountFuture />
  ))
  .add('Self Register Contract', () => (
    <SelfRegisterContract />
  ))
  .add('Self Register Risk Analysis', () => (
    <SelfRegisterWaitingRiskAnalysis />
  ))
  .add('Self Register Refused Account', () => (
    <SelfRegisterRefusedAccount />
  ))
  .add('Select Account', () => (
    <SelectAccount />
  ))
  .add('Withdraw', () => (
    <Withdraw />
  ))
  .add('WithdrawConfirmation', () => (
    <WithdrawConfirmation />
  ))
  .add('WithdrawForm', () => (
    <WithdrawForm />
  ))
  .add('Withdraw Result Success', () => (
    <WithdrawResultSuccess />
  ))
  .add('Withdraw Result Error', () => (
    <WithdrawResultError />
  ))
  .add('Anticipation Confirmation with automatic transfer', () => (
    <AnticipationConfirmationWithAutomaticTransfer />
  ))
  .add('Anticipation Confirmation without automatic transfer', () => (
    <AnticipationConfirmationWithoutAutomaticTransfer />
  ))
  .add('Anticipation Confirmation with error', () => (
    <AnticipationConfirmationWithError />
  ))
  .add('Anticipation Confirmation disabled', () => (
    <AnticipationConfirmationDisabled />
  ))
  .add('Anticipation Result with automatic transfer', () => (
    <AnticipationResultWithAutomaticTransfer />
  ))
  .add('Anticipation Result without automatic transfer', () => (
    <AnticipationResultWithoutAutomaticTransfer />
  ))
  .add('Anticipation Result error', () => (
    <AnticipationResultError />
  ))
  .add('Anticipation', () => (
    <Anticipation />
  ))
  .add('Bank Account Form', () => (
    <BankAccountForm />
  ))
