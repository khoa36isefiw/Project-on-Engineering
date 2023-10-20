import React, { useState, Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classNames from 'classnames/bind';
import styles from './ProductsInCard.module.scss';
import PageNotFound from '~/pages/NotFound/PageNotFound';
import SummaryStep from './SummaryStep';
import AddressStep from './AddressStep';
import ShippingStep from './ShippingStep';
import PaymentStep from './Payment';
import SignIn from '../SignIn';
import Breadcrumbs from './SummaryStep';

// Order state
const steps = ['Summary', 'Sign In', 'Address', 'Shipping', 'Payment'];

const cx = classNames.bind(styles);
function ProductsInCard() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    // const [currentStepName, setCurrentStepName] = useState(''); // for 2 step: Home > Shop > GiayNam
    
    // display name for each step
    const [stepHeaders, setStepHeaders] = useState([
        'Shopping-cart summary', // step 0
        'Authentication', // step 1
        'Address', // step 2
        'Shipping', // step 3
        'Please choose your payment method', // step 4
    ]);

    const navigate = useNavigate();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleContinueShopping = () => {
        navigate('/shop');
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const location = useLocation();


    // Render GUI with each step similiar to their component
    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                // AddressStep
                return <SummaryStep />;
                
            case 1:
                // return <SignIn isCheckout={location.pathname === '/checkout'} />;
                return <SignIn />;
            case 2:
                return <AddressStep />;
            case 3:
                return <ShippingStep />;
            case 4:
                return <PaymentStep />;
            default:
                return <PageNotFound />;
        }
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    

    return (
        <Box sx={{ width: '100%' }} className={cx('my-account-container')}>
            {/* ứng với mỗi step thì sẽ hiện thị từng nội dung header của step tương ứng */}
            {/* <Typography>Authentication</Typography> */}
            <Typography>{stepHeaders[activeStep]}</Typography>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {/* Done all step  */}
                {allStepsCompleted() ? (
                    <Box>
                        <Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </Fragment>
                    </Box>
                ) : (
                    <Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Step {activeStep + 1}</Typography>
                        
                        {activeStep === 0 && <SummaryStep />}
                        <Box className={cx('my-account-container2')}>
                            {activeStep === 1 && <SignIn />}
                        </Box>
                        {activeStep === 2 && <AddressStep />}
                        {activeStep === 3 && <ShippingStep />}
                        {activeStep === 4 && <PaymentStep />}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            {/* Return to the Shopping Page and Continue to Shopping */}
                            {/* {renderStepContent(activeStep)} */}
                            <Button color="inherit" onClick={handleContinueShopping} sx={{ mr: 1 }}>
                                Continue Shopping
                            </Button>
                            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button> */}
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </Fragment>
                )}
            </div>
        </Box>
    );
}

export default ProductsInCard;

// my-account-container
// ProductsInCard
